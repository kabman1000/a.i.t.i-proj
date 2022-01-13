import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { createAdmin } from "../../store";
import { Redirect } from "react-router";
import history from "../history";
import '../../styles/AdminLogin.css'
 
const AdminLogin = () => {
    const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})

		const data = await response.json()

        if(data.admin){
            alert("Login successful")
            history.push("/admin")
        }else{
            alert("Please check username and password")
        }
		console.log(data)
	}

	return (
		<div className="container">
			<h1>Admin Login</h1>
			<form onSubmit={loginUser}>
				<input
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					type="username"
					placeholder="Username"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input id='btn1' type="submit" value="Login" />
			</form>
		</div>
	)
};

export default AdminLogin;