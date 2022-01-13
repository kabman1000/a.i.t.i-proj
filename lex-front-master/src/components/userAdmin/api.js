import axios from "axios"

export const getUsers = () => fetch('http://localhost:5000/api/users').then(res => res.json)

export const getUser = (id) => axios.get(`http://localhost:5000/api/user/${id}`).then(res => res.data)