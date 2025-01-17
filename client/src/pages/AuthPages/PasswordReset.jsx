import React, { useState } from 'react'
import InputDefault from '../../components/forms/InputDefault'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubmitBtn from '../../components/Buttons/SubmitBtn';

const PasswordReset = () => {
    const navigate = useNavigate()
    const [passReset, SetpassReset] = useState({
        email: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setlogindata((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headlePassReset = async (e) => {
        e.preventDefault()

        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/signin' + passReset)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Password Reset Link has been sent to Email Address,.. Check Email")
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
                <p className="">Password Reset</p>
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
                        <form onSubmit={headlePassReset} method="post">
                            <div className="my-4">
                                <p className="pb-4">Email Address</p>
                                <InputDefault 
                                    Type={'email'}
                                    value={passReset.email}
                                    name={'email'}
                                    placeholder={'Enter Email Address'}
                                    required={true}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="">
                                <SubmitBtn btntype={'submit'} btnvalue={'Request Password Reset Link'} />
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

export default PasswordReset