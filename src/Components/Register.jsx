import React, { useState } from 'react'
import {auth} from '../Firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
      
      e.preventDefault();
      
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
        navigate("/")
      }
      catch(err) {
        console.log("some error", err)
      }
         
    }
    
  return (
     <>
        <div className="container my-5">

            <h1 className='text-center'>React Firebase Authentication</h1>

            <div className="conatiner d-flex justify-content-center mt-4">

     <form onSubmit={handleSubmit} style={{width: "750px"}} >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input
    value={email}
    onChange={(e) => setEmail(e.target.value)} 
    type="email" 
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input
    value={password}
    onChange={(e) => setPassword(e.target.value)} 
    type="password" 
    className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className='text-center mt-4'>
  <button type="submit" className="btn btn-info" style={{width: "40%"}}>Register</button>
  </div>
</form>
            </div>
        </div>
     </>
  )
}

export default Register
