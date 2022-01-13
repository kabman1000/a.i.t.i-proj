import _ from 'lodash';
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchUser, editUser } from '../../../src/store';
import UserForm from './UserForm';
import axios from 'axios';
import { useParams, useRouteMatch } from 'react-router';
import { getUser } from './api';
import '../../styles/AdminLogin.css';

const UserEdit =()=> {

    const [fullname, setFullname] = useState('')
	const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
	const [newUser, setNewUser] = useState('')
	const match = useRouteMatch()

    const editUser=()=>{

		axios.put(`http://localhost:5000/api/edit/${match.params.id}`,{
            fullname:fullname,
            password:password,
            email:email,
        })
	}

	useEffect(()=>{
		const fetchUser = async () =>{
		
			const newUser = await getUser(match.params.id)
			setNewUser(newUser)
			console.log(newUser)
		}
		fetchUser()
	},[])

    
    return (
		<div className="container">
			<h1>Edit User</h1>
			<form onSubmit={()=>editUser()}>
				<input
					value={newUser.fullname}
					onChange={(e) => setFullname(e.target.value)}
					type="fullname"
					placeholder="fullname"
				/>
				<br />
                <input
					value={newUser.email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={newUser.password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input id="btn1" type="submit" value="Create" />
			</form>
		</div>
	)
    
};


export default UserEdit;