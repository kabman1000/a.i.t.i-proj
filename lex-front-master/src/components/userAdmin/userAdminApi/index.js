const express = require("express")
const app = express();
const cors = require('cors');
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const Admin = require('./models/admin');
const { response } = require("express");
const User = require('./models/user');

app.use(express.json());

mongoose.connect("mongodb+srv://kabman:0268598342aA@cluster0.sn5p1.mongodb.net/admins?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology: true})
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));


app.use(cors({
    origin:"http://localhost:3000",
}))


let refreshTokens = []

app.post("/api/refresh",(req,res)=>{

    const refreshToken = req.body.token

    if(!refreshToken){
        return res.status(401).json("You are not authenticated!")
    }
    if(!refreshTokens.includes(refreshToken)){
        return res.status(403).json("Refresh Token is not valid");
    }

    jwt.verify(refreshToken,"myRefreshSecretKey",(err,user)=>{
        err && console.log(err);
        refreshTokens = refreshTokens.filter(token => token !== refreshToken);

        const newAccessToken = jwt.sign({id:user.id, isAdmin: user.isAdmin},"mySecretKey",{expiresIn:"15m"})
        const newRefreshToken = jwt.sign({id:user.id, isAdmin: user.isAdmin},"myRefreshSecretKey")

        refreshTokens.push(newRefreshToken);
        res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
        })
    })
})

app.get("/api/user/:id", (req,res)=>{
    const id = req.params.id;

    User.findById(id, (err, user)=>{
        res.send(user)
    })
})

app.get("/api/users", async (req,res)=>{
 User.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
})

app.put("/api/edit/:id", (req,res) =>{
    const id = req.params.id;
    User.findById(id, (err, user)=>{
        res.json(user)
    })
})

app.post("/api/signup", async (req,res)=>{

    try{
        await Admin.create({
            username:req.body.username,
            password:req.body.password
        })
        res.json({status:'ok'})
    }catch(err){
        console.log(err)
        res.json({status:'error',error:'Duplicate email'})
    }

})

app.post("/api/create", async (req,res)=>{
    try{
        await User.create({
            fullname:req.body.fullname,
            email:req.body.email,
            password:req.body.password
        })
        res.json({status:'ok'})
    }catch(err){
        console.log(err)
        res.json({status:'error',error:'Error'})
    }
})

app.post("/api/login", async (req,res)=>{

        const admin = await Admin.findOne({username: req.body.username, password:req.body.password })
        if(admin){
            const token = jwt.sign({
                username: admin.username,
                password: admin.password
            }, 'secret123')
            return res.json({status:'ok', admin: token })
        } else {
            return res.json({status:'error', admin:false})
        }
    
})




/*
    const {username, password} = req.body;
    const user = users.find( user => {
        return user.username === username && user.password === password;
    });
    if(user){
        const accessToken = jwt.sign({id:user.id, isAdmin: user.isAdmin},"mySecretKey",{expiresIn:"15m"})
        const refreshToken = jwt.sign({id:user.id, isAdmin: user.isAdmin},"myRefreshSecretKey")
        refreshTokens.push(refreshToken)
        res.json({
            username:user.username,
            isAdmin:user.isAdmin,
            accessToken,
            refreshToken
        })
    }else{
        res.status(400).json("Username or password incorrect")
    }*/


/*app.delete("/api/users/:userId", verify, (req,res)=>{
    if(req.user.id === req.params.userId || req.user.isAdmin){
        res.status(200).json("User has been deleted")
    }else{
        res.status(403).json("You are not allowed to delete this user")
    }
})

app.post("/api/logout", verify, (req,res)=>{
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter(token => token !== refreshToken);
    res.status(200).json("You logged out successfully")
})*/

app.listen(5000,()=> console.log("Backend server running"))