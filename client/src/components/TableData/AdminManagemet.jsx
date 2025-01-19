import React, { useEffect, useState } from 'react'
import CustomBtn from '../Buttons/CustomBtn'
import { Link } from 'react-router-dom'

const AdminManagemet = () => {
    // const [users, setusers] = useState([])
    // useEffect(() => {
    //     axios.get(import.meta.env.VITE_APP_API + '/users/getusers')
    //     .then(res => setusers(res.data.Result))
    //     .catch(err => console.log(err))
    // }, [])



    const [users, setUsers] = useState([
        {
            _id: 1,
            name: 'jehan',
            email: 'textemail@123.com',
            role: 'admin',
        },
        {
            _id: 2,
            name: 'newuser',
            email: 'textemail1@123.com',
            role: 'admin',
        },
    ]);

    const [searchQuery, setSearchQuery] = useState('');

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    

  return (
    <div className='my-4'>
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search by username or email"
                className="border p-2 w-full rounded"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
        <table className='w-full'>
            <thead className='h-12 bg-[#696cff] text-white'>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                    {filteredUsers.map((data, index) => {
                        if(data.role === 'admin'){
                            return( 
                                <tr
                                    className="h-12 bg-white border-b border-[#696cff]/20 text-center text-gray-500"
                                    key={index}
                                >
                                    <td className="pl-4 font-semibold">{data._id}</td>
                                    <td className="pl-4">{data.name}</td>
                                    <td className="pl-4">{data.email}</td>
                                    <td>
                                        <span className="bg-red-500 px-4 py-0 rounded text-white font-semibold">
                                            Admin
                                        </span>
                                    </td>
                                    <td>
                                        <div>
                                            <center>
                                                <Link to={`/Dashboard/VIewUser/${data._id}`}>
                                                    <CustomBtn
                                                        btntype={'button'}
                                                        btnvalue={'View User'}
                                                        bgColor={'bg-[#696cff]'}
                                                    />
                                                </Link>
                                                <Link>
                                                    <CustomBtn
                                                        btntype={'button'}
                                                        btnvalue={'View Activities'}
                                                        bgColor={'bg-red-500'}
                                                    />
                                                </Link>
                                            </center>
                                        </div>
                                    </td>
                                </tr>
                                )
                        }
                    })}
                    {filteredUsers.length === 0 && (
                        <tr>
                            <td colSpan="5" className="text-center text-gray-500">
                                No users found
                            </td>
                        </tr>
                    )}
            </tbody>
        </table>
    </div>
  )
}

export default AdminManagemet