import React, { useState } from 'react'
import InputDefault from '../../components/forms/InputDefault';
import SubmitBtn from '../../components/Buttons/SubmitBtn';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'


const SignIn = () => {
    const navigate = useNavigate()
    const [logindata, setlogindata] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setlogindata((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headleLogin = (e) => {
      e.preventDefault();

      try{
          const res = axios.post(import.meta.env.VITE_APP_API + '/auth/signin', logindata)
          .then(res => {
              if(res.data.Status === "Success"){
                  alert("Login Success")
                  navigate('/Dashboard/home')
                  localStorage.setItem('Login', res.data.Token)
                  secureLocalStorage.setItem('Login1', res.data.Result.email)
                  secureLocalStorage.setItem('Login2', res.data.Result.role) 
                  window.location.reload()   
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
          <p className="">Login</p>
        </div>
      </div>

      <div className="py-16">
        <h1 className="">
            <h1 className="text-center choco-title text-5xl text-[#BC9773] font-bold">Welcome</h1>
        </h1>
        <div className="md:grid grid-cols-3 gap-3 py-4">
            <div className=""></div>
            <div className="">
                <div className="md:mx-0 mx-4 p-6 rounded-md shadow-md bg-[#BC9773]/20">
                    <form onSubmit={headleLogin} method="post">
                        <p className="text-[#654321] my-2">Email : </p>
                        <InputDefault 
                            Type={"email"}
                            onChange={handleInputChange}
                            placeholder={"Email"}
                            value={logindata.email}
                            name={'email'}
                            required={true}
                        />    

                        <p className="text-[#654321] my-2">Password : </p>
                        <InputDefault 
                            Type={"password"}
                            onChange={handleInputChange}
                            placeholder={"Password"}
                            value={logindata.password}
                            name={'password'}
                            required={true}
                        />   

                        <div className="mt-4">
                            <SubmitBtn btntype={'submit'} btnvalue={'Login'}/>
                        </div>                 
                    </form>

                </div>
                <div className="mt-16 md:mx-0 mx-8">
                    <div className="md:flex justify-between">
                        <a href="">
                            <p className="text-[#654321] uppercase font-semibold">forget password</p>
                        </a>
                        <a href="/register">
                            <p className="text-[#654321] uppercase font-semibold">Create Account</p>
                        </a>
                        <a href="/">
                            <p className="text-[#654321] uppercase font-semibold">Back to Home</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
      </div>
    </div>
  )
}

export default SignIn