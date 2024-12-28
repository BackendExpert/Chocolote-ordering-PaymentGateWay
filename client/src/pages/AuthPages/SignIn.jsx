import React, { useEffect, useState } from 'react'
import SubmitBtn from '../../components/Buttons/SubmitBtn'
import { FaUserAlt, FaKey  } from "react-icons/fa";
import InputDefault from '../../components/forms/InputDefault';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const navigate = useNavigate()

  const [LoginData, SetLoginData] = useState({
      email: '',
      password: '',
  })

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      SetLoginData((prevData) => ({
        ...prevData,
        [name]: value
      }));
  };

  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const headleLogin = (e) => {
    e.preventDefault();

    try{
        // const res = axios.post(import.meta.env.VITE_APP_API + '/Auth/Login', LoginData)
        // .then(res => {
        //     if(res.data.Status === "Success"){
        //         alert("Login Success")
        //         navigate('/Dashboard/home')
        //         localStorage.setItem('Login', res.data.Token)
        //         secureLocalStorage.setItem('Login1', res.data.Result.email)
        //         secureLocalStorage.setItem('Login2', res.data.Result.role) 
        //         window.location.reload()   
        //     }
        //     else{
        //         alert(res.data.Error)
        //     }
        // })
        console.log(LoginData)
    }
    catch(err){
        console.log(err)
    }
  }

  return (
    <div className='mt-28 my-8 mx-8 md:mx-32'>
        <div className="md:flex md:my-0 mt-40">
            <div className="w-full">
              <img src='https://wallpapercave.com/wp/wp14829725.webp' alt="" className='rounded-l-md'/>
            </div>
            <div className="w-full md:ml-16">
                <div className="my-4">
                  <h1 className="text-xl font-semibold text-center text-[#BC9773]">
                    SignIn
                  </h1>

                  <div className="">
                    <form onSubmit={headleLogin} method="post">
                        <div className="my-8">
                            <div className="flex my-2">
                                <p className="p-3 border border-[#BC9773] rounded-l-lg">
                                  <FaUserAlt className='h-8 w-auto fill-[#BC9773]'/>
                                </p>

                                <InputDefault 
                                    Type={"email"}
                                    onChange={handleInputChange}
                                    placeholder={"Email Address"}
                                    value={LoginData.email}
                                    name={'email'}
                                    required={true}
                                />
                            </div>  

                            <div className="flex my-4">
                                <p className="p-3 border border-[#BC9773] rounded-l-lg">
                                  <FaKey className='h-8 w-auto fill-[#BC9773]'/>                                        
                                </p>
                                <InputDefault 
                                    Type={"password"}
                                    onChange={handleInputChange}
                                    placeholder={"Password"}
                                    value={LoginData.password}
                                    name={'password'}
                                    required={true}
                                />                                        
                            </div>  

                            <div className="mt-8">
                                <SubmitBtn btntype={'submit'} btnvalue={'SignIn to Account'}/>
                            </div>                                    
                        </div>
                    </form>

                    <div className="">
                      <p className="">Don't have an Account ? <span className='text-[#BC9773] font-semibold'><a href="">Create New Account</a></span></p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn