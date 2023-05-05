import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app)
const Register = () => {
    const [show, setSHow] = useState(false);

  const { user, createUser } = useContext(AuthContext);
   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
 setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase");
      return;
    }
     else if (password.length < 6) {
      setError("Please add at least 6 characters in your password");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess('User has been created successfully');
                updateUserData(result.user, name);
            })
            .catch(error => {
                console.error(error.message);
               
                setError(error.message);
            })
    }

   
     const updateUserData = (user, name,url) => {
       updateProfile(user, {
         displayName: name, photoURL:url
       })
         .then(() => {
           console.log(user);
         })
         .catch((error) => {
           setError(error.message);
         });
     };
  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Register !</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Photo</span>
              </label>
              <input
                type="url"
                name="url"
                placeholder="Your photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
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
                    placeholder="Your password"
                    className="input input-bordered"
                    type={show ? "text" : "password"}
                    name="password"
                    id=""
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

              <br />
              <p className="text-red-600 text-xl font-semibold">{error}</p>
              <p className="text-green-600 text-xl font-semibold">{success}</p>
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account?<span className="text-amber-600">Please Login</span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
