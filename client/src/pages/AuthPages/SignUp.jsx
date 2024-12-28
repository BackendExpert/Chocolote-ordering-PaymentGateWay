import React from 'react'
import SubmitBtn from '../../components/Buttons/SubmitBtn'

const SignUp = () => {
  return (
    <div className='mt-28 my-8 mx-8 md:mx-32'>
        <div className="md:flex">
            <div className="w-full">
              <img src='https://wallpapercave.com/wp/wp14829725.webp' alt="" className='rounded-l-md'/>
            </div>
            <div className="w-full">
                <div className="my-4">
                  <h1 className="text-xl font-semibold text-center text-[#BC9773]">
                    Create New Account
                  </h1>

                  <div className="">
                    <form onSubmit={headleLogin} method="post">
                        <div className="my-8">
                            <div className="flex my-2">
                                <p className="p-3 border rounded-l-lg">
                                  <FaUserAlt className='h-8 w-auto fill-gray-400'/>
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
                                <p className="p-3 border rounded-l-lg">
                                  <FaKey className='h-8 w-auto fill-gray-400'/>                                        
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

                            <div className="">
                                <SubmitBtn btntype={'submit'} btnvalue={'Create Account'}/>
                            </div>                                    
                        </div>
                    </form>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp