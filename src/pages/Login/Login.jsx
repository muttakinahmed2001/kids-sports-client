import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const [error,setError]= useState();
  const navigate = useNavigate()
  const location = useLocation();
  console.log(location)
  useTitle('Login')
  const from = location.state?.from?.pathname

  const {signIn,googleSignIn }= useContext(AuthContext);
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email,password)
    .then(result => {
      const user = result.user;
      console.log(user)
      setError('')
      navigate(from)
    })
    .catch(error => setError(error.message))
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      console.log(user)
      setError('')
      navigate(from)
    })
    .catch(error => setError(error.message))

  }

  
 
  return (
    <div className="hero min-h-screen bg-base-200">


      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-5xl font-bold text-center mb-5">Login</h1>
          <h2 className="  mb-5">Continue with google or enter your details.</h2>
          <button onClick={handleGoogleSignIn} className="btn btn-outline  ">  <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
            <>
              <FcGoogle  className="mr-2  ">  </FcGoogle >
            </>
          </IconContext.Provider>  Log in with google </button>

           <h3 className="text-center">or</h3> 
           <form onSubmit={handleLogin}><div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" required className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" required className="input input-bordered" />
             
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-warning mb-3" type="submit" value="Login" />
             
          </div></form>
          

          <h3>Don't have an account? <Link to='/signUp' className="font-bold">Sign up for free</Link></h3>
          
         <h3 className="text-rose-700">{error}</h3>
        </div>
      </div>
    </div>

  );
};

export default Login;