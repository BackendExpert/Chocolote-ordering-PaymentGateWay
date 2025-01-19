import React from 'react'

const UserManagement = () => {
    const [users, setusers] = useState([])

    // useEffect(() => {
    //     axios.get(import.meta.env.VITE_APP_API + '/users/getusers')
    //     .then(res => setusers(res.data.Result))
    //     .catch(err => console.log(err))
    // }, [])

    const testuser = [
        {
            id: 1,
            name: 'testuser 1',
            email: 'textemail@123.com',
            role: 'user'
        },
        {
            id: 1,
            name: 'testuser 1',
            email: 'textemail1@123.com',
            role: 'admin'
        }
    ]

  return (
    <div>
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
                {
                    testuser.map((data, index) => {
                        return (
                            <tr className="h-12 bg-white border-b border-[#696cff]/20" key={index}>
                                <td className='pl-4 font-semibold'>{data.id}</td>
                                <td className='pl-4'>{data.email}</td>
                                <td>
                                    {
                                        (() => {
                                            if(data.role === 'admin'){
                                                return (
                                                    <span className='bg-red-500 px-4 py-1 rounded'>ADMIN</span>
                                                )
                                            }
                                            else if(data.role === 'user'){
                                                return (
                                                    <span className='bg-green-500 px-4 py-1 rounded'>USER</span>
                                                )
                                            }
                                        })()
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default UserManagement