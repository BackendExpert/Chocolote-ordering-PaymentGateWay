import React, { useState } from 'react'
import { FaUserAlt, FaKey  } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'
import { MdAlternateEmail } from "react-icons/md";
import InputDefault from '../../components/forms/InputDefault';
import SubmitBtn from '../../components/Buttons/SubmitBtn';


const SignUp = () => {
    const navigate = useNavigate()

    const [SignUpData, SetSignUpData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        SetSignUpData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const headleSignUp = (e) => {
        e.preventDefault();

        try{
            const res = axios.post(import.meta.env.VITE_APP_API + '/Auth/SignUp', SignUpData)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Registation Success")
                    navigate('/LoginPortal')
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
    <div className='bg-gray-100'>
        <div className="md:py-[8%] py-[30%] md:mx-32 mx-4">
            <div className="bg-white">
                <div className="p-8 rounded-lg shadow-md">
                    <div className="md:flex">
                        <div className="w-full">
                            <img src='https://wallpapercave.com/wp/wp14829725.webp' alt="" className='rounded-l-md'/>
                        </div>
                        <div className="w-full">
                            <div className="text-center">
                                <h1 className="text-2xl font-semibold text-[#7466f1]">SignUp</h1>
                                <p className="text-sm text-gray-500">Enter your details to Create Your Accout</p>
                                <center><hr className='my-2 w-2/3'/></center>
                            </div>

                            <form onSubmit={headleSignUp} method="post">
                                <div className="my-8">
                                    <div className="flex my-2">
                                        <p className="p-3 border rounded-l-lg">
                                        <FaUserAlt className='h-8 w-auto fill-gray-400'/>
                                        </p>

                                        <InputDefault 
                                            Type={"text"}
                                            onChange={handleInputChange}
                                            placeholder={"Username"}
                                            value={SignUpData.username}
                                            name={'username'}
                                            required={true}
                                        />
                                    </div>  

                                    <div className="flex my-2">
                                        <p className="p-3 border rounded-l-lg">
                                        <MdAlternateEmail className='h-8 w-auto fill-gray-400'/>
                                        </p>

                                        <InputDefault 
                                            Type={"email"}
                                            onChange={handleInputChange}
                                            placeholder={"Email Address"}
                                            value={SignUpData.email}
                                            name={'email'}
                                            required={true}
                                        />
                                    </div>  

                                    <div className="flex my-4">
                                        <p className="p-3 border rounded-l-lg">
                                        <FaKey className='h-8 w-auto fill-gray-400'/>                                        
                                        </p>
                                        <InputDefault 
                                            Type={"password"}
                                            onChange={handleInputChange}
                                            placeholder={"Password"}
                                            value={SignUpData.password}
                                            name={'password'}
                                            required={true}
                                        />                                        
                                    </div>  

                                    <div className="">
                                        <SubmitBtn btnType={'submit'} btnText={"Create Account"} />
                                    </div>                                    
                                </div>
                            </form>

                            <center><hr className='my-2 w-2/3'/></center>

                            <div className="text-[#7466f1]">
                                <span className='text-gray-500 font-semibold'>Already have Account ? </span><a href="/LoginPortal">SignIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp