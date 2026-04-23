import React, { useState } from 'react'
import {auth} from '../Firebase'
import {signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    
   const navigate = useNavigate();
       
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("")
   
       const handleSubmit = async (e) => {
         
         e.preventDefault();
         
         try {
           const user = await signInWithEmailAndPassword(
             auth,
             email,
             password
           )
           navigate("/home")
         }
         catch(err) {
           console.log("some error", err)
         }
       }

       const googleClick = async () => {
         try {
           const provider = new GoogleAuthProvider();
           const result = await signInWithPopup(
            auth,
            provider
           )
           navigate("/home")
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
  <button type="submit" className="btn btn-danger" style={{width: "40%"}}>Login</button>
  </div>

  <div className='d-flex justify-content-end'>
    <Link to={"/register"} className='text-decoration-none text-light'>Register New User?</Link>
  </div>
</form>
            </div>
            
        <div className="d-flex align-items-center justify-content-center my-4">
  <hr className="w-25" />
  <span className="mx-3 badge bg-secondary">OR</span>
  <hr className="w-25" />
</div>

            <div className="container text-center my-3 d-flex justify-content-center">
                 <button className='btn bg-light text-dark d-flex justify-content-center align-items-center py-2' onClick={googleClick}>
                    <div style={{width: "30px"}}>
                        <img src="https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png" alt="Google" style={{width: "100%"}}/>
                    </div>
                    <div className='mx-3'>
                        <h3 style={{fontSize: "24px"}}>Login With Google</h3>
                    </div>
                 </button>
            </div>
        </div>
     </>
  )
}

export default Login 
