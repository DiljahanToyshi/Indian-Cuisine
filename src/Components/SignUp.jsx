import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
    const [show, setSHow] = useState(false);


  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    form.reset();
    console.log(email, password, confirm);

    setError("");
    if (password !== confirm) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">SignUp!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                // ref={emailRef}
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
                    placeholder="password"
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className="flex ">
                <div>
                  {" "}
                  <input
                    type={show ? "text" : "password"}
                    name="confirm"
                    id=""
                    placeholder="confirm your password"
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

              
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-amber-400 text-white">SignUp</button>
            </div>
          </form>

          <p className="text-red-600 text-xl font-semibold">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
   