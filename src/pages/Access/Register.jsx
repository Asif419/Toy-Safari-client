import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";


const Register = () => {
  // const { createUser, updateUserProfile, googleSignIn, gitHubSignIn, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const location = useLocation();

  return (
    <div>
      <div className="">
        <div className="text-center mx-auto p-5 md:p-10 form-control w-full max-w-xl bg-base-200 rounded-2xl my-10">
          <form className='mb-3'>
            <h3 className='text-3xl mb-10 font-semibold tracking-widest'>Registration!</h3>
            <div className='relative'>
              <div className="name">
                <span className="label-text font-bold font-start">Name</span> <br />
                <input type="text" placeholder="Enter Your name" name='name' className="input input-bordered w-full max-w-xs text-center mb-3" required />
              </div>
              <div className="photo">
                <span className="label-text font-bold font-start">Photo URL</span> <br />
                <input type="text" placeholder="Photo URL" name='photoURL' className="input input-bordered w-full max-w-xs text-center mb-3" required />
              </div>
              <div className="email">
                <span className="label-text font-bold font-start">Email</span> <br />
                <input type="email" placeholder="Enter Your E-mail" name='email' className="input input-bordered w-full max-w-xs text-center mb-3" required />
              </div>
              <div className="password">
                <span className="label-text font-bold font-start">Password</span> <br />
                <input type="Password" placeholder="Enter Your Password" name='password' className="input input-bordered w-full max-w-xs text-center mb-3" required />
              </div>
            </div>
            {
              errorMessage && (
                <div className='border border-red-400 rounded-lg w-2/3 mx-auto text text-red-600 m-2 '>
                  {
                    errorMessage.slice(0, 9) === 'Firebase:' ? (
                      errorMessage === 'Firebase: Error (auth/email-already-in-use).' ?
                        <p>Email already used</p> :
                        errorMessage === 'Firebase: Error (auth/invalid-email).' ?
                          <p>Email is not formatted correctly</p> :
                          errorMessage === 'Firebase: Error (auth/too-many-requests).' ?
                            <p>Too many attempts, try again later</p> :
                            <p>There was an error while trying to create your account. Please try again later.</p>
                    ) :
                      <p>{errorMessage}</p>
                  }
                </div>
              )
            }
            <button className="btn btn-primary  text-black-800">Sign up</button>
          </form>
          <div className='text-center'>
            <div className="divider">OR</div>
            <p>Login with social media</p>
            <button className='mr-4'><FaGoogle className='text-4xl' /></button>
            <button><FaGithub className='text-4xl' /></button>
          </div>
          <div>
            <div className="divider">Already have an Account?</div>
            <Link to='/login'>
              <span className='underline decoration-1'>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;