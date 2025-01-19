import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {
    const navigate = useNavigate()
    const {token} = useParams()
    const [updatepass, setupdatepass] = useState({
        newpass: '',
        confarmpass: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setlogindata((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headleupdatepass = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/updatepass', updatepass)
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
    <div></div>
  )
}

export default ResetPassword