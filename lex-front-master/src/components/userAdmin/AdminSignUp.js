import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { createAdmin } from "../../store";
import { Redirect } from "react-router";
import history from "../history";
import '../../styles/AdminLogin.css'
 
const AdminSignUp = () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/api/signup', {
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

		if (data.status === 'ok') {
			history.push('/admin/login')
		}
	}

	return (
		<div className="container">
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					type="text"
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
				<input id='btn1' type="submit" value="Register" />
			</form>
		</div>
	)
};

export default AdminSignUp;