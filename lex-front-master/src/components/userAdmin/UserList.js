import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { fetchUsers } from '../../../src/store';
import history from '../history';
import { populate } from './userAdminApi/models/admin';
import { getUsers } from './api';
import axios from 'axios';
import '../../styles/UserList.css'

const  UserList = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/users').then((response)=>{
            setUsers(response.data)
        })
    },[])
    
        return (
            <div>
                <h2>Users</h2>
                <div>
                    {users.map((val,key)=>{
                        return <div key={key}>
                                <table className='table'>
                                    <tr>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Actions</th>
                                    </tr>
                                    <tr>
                                        <td>{val.fullname}</td>
                                        <td>{val.email}</td>
                                        <td>{val.password}</td>
                                        <td>
                                            <Link to='/admin/delete/:id'><button>Delete</button></Link>
                                            <Link to={`/admin/edit/${val._id}`}><button>Edit</button></Link>
                                        </td>
                                    </tr>
                                </table>
                               </div>
                    })}
                </div>
            </div>
        )
}


export default UserList;