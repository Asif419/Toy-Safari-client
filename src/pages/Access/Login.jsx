import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import Lottie from "lottie-react";
import login from '../../assets/animation/login.json';
import { AuthContext } from "../../providers/AuthProvider";
import UseTitle from "../../utilities/UseTitle";


const Login = () => {
  const { emailSingIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || location.state?.from?.from || '/';
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  UseTitle('Login');



  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;


    emailSingIn(email, password)
      .then(() => {
        form.reset()
        navigate(from, { replace: true });
      })
      .catch(error => {
        setErrorMessage(error.message);
      })
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    window.scrollTo(0, 70);
  }, []);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0">
      <div className="text-center mx-auto p-5 md:p-10 form-control w-full max-w-sm bg-base-200 rounded-2xl my-10">
        <form className='mb-3' onSubmit={handleLogin}>
          <h3 className='text-3xl mb-10 font-semibold tracking-widest'>Please, Login!</h3>
          <span className="label-text font-bold">Email</span>
          <input type="email" placeholder="Enter Your E-mail" name='email' className="input input-bordered w-full max-w-xs mb-3" required />
          <span className="label-text font-bold">Password</span>
          <input type="password" placeholder="Enter Your Password" name='password' className="input input-bordered w-full max-w-xs mb-3" required />
          {
            errorMessage && (
              <div className='border border-red-400 rounded-lg w-2/3 mx-auto text text-red-600 m-2 '>
                {
                  (!errorMessage) ? '' :
                    errorMessage === 'Firebase: Error (auth/wrong-password).' ?
                      <p>Wrong password. Please try again.</p> :
                      errorMessage === 'Firebase: Error (auth/user-not-found).' ?
                        <p>User not found. Please check your email and try again.</p> :
                        <p>An error occurred. Please try again later.</p>
                }
              </div>
            )
          }
          <button className="btn btn-primary text-black-800">Login</button>
        </form>
        <div className='text-center'>
          <div className="divider">OR</div>
          <p>Login with social media</p>
          <button onClick={handleGoogleSignIn} className='mr-4'><FaGoogle className='text-4xl' /></button>
        </div>
        <div>
          <div className="divider">New Here?</div>
          <Link to='/register'
            state={{ from: from }}
          >
            <span className='underline decoration-1'>Sign up</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-items-center items-center">
        <Lottie
          className=''
          animationData={login}
          loop={false}
        />
      </div>
    </div>
  );
};

export default Login;