import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";
import {  GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {
  FaGoogle,
} from "react-icons/fa";
import app from "../firebase/firebase.config";



const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [user,setUser] = useState(null);
  const [show,setSHow] = useState(false);
   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");
   const emailRef = useRef();

  const { signIn } = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();
// console.log(location);
const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
        setError("");
        setSuccess("");

           if (!/(?=.*[A-Z])/.test(password)) {
             setError("Please add at least one uppercase.");
             return;
           }
            else if (password.length < 6) {
             setError("Password must be 6 characters long");
             return;
           }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, {replace:true});
      })
      .catch((error) => {
        console.log(error);
        setError(error.message)
      });

       signInWithEmailAndPassword(auth, email, password)
         .then((result) => {
           const loggedUser = result.user;
           console.log(loggedUser);
           if (!loggedUser.emailVerified) {
           }
           setSuccess("User login successful.");
           setError("");
         })
         .catch((error) => {
           setError(error.message);
         });
  };
  const handleGoogleSignIn =() =>{
signInWithPopup(auth,provider)
.then(result =>{
  const loggedInUser = result.user;
  console.log(loggedInUser.photoURL);
  setUser(loggedInUser);
})
.catch(error =>{
  console.log(error.message)
})
  }



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Login !</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex ">
                <div>
                  {" "}
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    id=""
                    placeholder="your password"
                    required
                  />
                </div>
                <div>
                  <p onClick={() => setSHow(!show)}>
                    <small>
                      {show ? (
                        <span>Hide Password </span>
                      ) : (
                        <span>Show Password </span>
                      )}
                    </small>
                  </p>
                </div>
              </div>

              <p className="mb-4 ">
                <Link to="/signup" className="label-text-alt link link-hover">
                  New to Delicious Indian Cuisine?{" "}
                  <span className="text-amber-600">
                    Please create an account
                  </span>
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-amber-400 text-white">Login</button>
            </div>
          </form>
          <div className="text-center text-orange-500">

          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline  md:w-56 mb-3 md:mb-5 text-amber-500"
          >
            {" "}
            <FaGoogle className="" /> Login with Google
          </button>          </div>


          <p className="text-red-600 text-xl font-semibold py-4 px-3 md:px-5">{error}</p>
          <p className="text-green-600 text-xl font-semibold">{success}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
