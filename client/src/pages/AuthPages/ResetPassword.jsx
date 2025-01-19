import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import InputDefault from '../../components/forms/InputDefault'
import SubmitBtn from '../../components/Buttons/SubmitBtn'

const ResetPassword = () => {
    const navigate = useNavigate()
    const {token} = useParams()
    const [checktoken, setchecktoken] = useState(null)

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + `/auth/checktoken/${token}`)
        .then(res => setchecktoken(res.data.Result))
        .catch(err => console.log(err))

        if(!checktoken === true || token.trim() === ""){
            navigate('/signin')
            window.location.reload()
        }
    }, [])

    const [updatepass, setupdatepass] = useState({
        newpass: '',
        confarmpass: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setupdatepass((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };





    const headleupdatepass = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + `/auth/updatepass/${token}`, updatepass)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Password Updated Successful")
                    navigate('/signin')
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className="bg-[#BC9773]/20">
        <div className="relative md:h-[40vh] w-full py-16 px-4 md:px-16 bg-cover bg-center" style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp2126571.jpg")' }}>
            <div className="absolute inset-0 bg-black opacity-40"></div> 
            <div className="relative px-2 md:px-32 text-white my-20 z-10 text-center">
                <h1 className="text-2xl md:text-5xl font-semibold choco-title">Account</h1>
                <p className="">Update Password</p>
            </div>
        </div>

        <div className="py-16">
            <h1 className="">
                <h1 className="text-center choco-title text-5xl text-[#BC9773] font-bold">Welcome</h1>
            </h1>
            <div className="md:grid grid-cols-3 gap-3 py-4">
                <div className="w-full"></div>
                <div className="w-full">
                    <div className="md:mx-0 mx-4 p-6 rounded-md shadow-md bg-[#BC9773]/20">
                        <form onSubmit={headleupdatepass} method="post">
                            <div className="my-2">
                                <p className="pb-4">New Password</p>
                                <InputDefault 
                                    Type={'password'}
                                    value={updatepass.newpass}
                                    name={'newpass'}
                                    required={true}
                                    placeholder={'Enter New Password'}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="my-2">
                                <p className="pb-4">Confirm Password</p>
                                <InputDefault 
                                    Type={'password'}
                                    value={updatepass.confarmpass}
                                    name={'confarmpass'}
                                    required={true}
                                    placeholder={'Confirm Password'}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="my-4">
                                <SubmitBtn 
                                    btntype={'submit'}
                                    btnvalue={'Reset Password'}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full"></div>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword