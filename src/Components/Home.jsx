import React from 'react'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();
  const auth = getAuth();

    const logOut = async () => {
      
      await auth.signOut();
      navigate("/");
    }

  return (
    <>
      <div className="container text-center my-4">
        
          <h1>Welcome To Home Page</h1>

          <div className='my-5'>
           <h1>{auth.currentUser?.displayName}</h1>
            <h2>{auth.currentUser?.email}</h2>

            <div className='my-3'>
            <img src={auth.currentUser?.photoURL} alt="..." />
            </div>
            
          </div>

          <div>
            <button className="btn btn-warning" onClick={logOut}>Log Out</button>
          </div>
        
       </div>    
    </>
  )
}

export default Home
