import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { createAdmin } from "../../store";
import { Redirect } from "react-router";
import history from "../history";
import '../../styles/AdminLogin.css'
 
const UserCreate = () => {
    const [fullname, setFullname] = useState('')
	const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

	async function createUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/api/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				fullname,
                email,
				password
			}),
		})

		const data = await response.json()

        if (data.status === 'ok') {
			history.push('/admin')
		}
		console.log(data)
	}

	return (
		<div className="container">
			<h1>Create User</h1>
			<form onSubmit={createUser}>
				<input
					value={fullname}
					onChange={(e) => setFullname(e.target.value)}
					type="fullname"
					placeholder="Fullname"
				/>
				<br />
                <input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
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

export default UserCreate;