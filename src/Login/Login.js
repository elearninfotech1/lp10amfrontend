import React, { useState } from "react";
import studentStyles from "./student.module.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://lp10ambackend.onrender.com/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data == "Valid") {
          navigate("/admindashboard");
        } else {
          alert("Invalid Username & Password");
        }
      })
      .catch((err) => {
        alert("Invalid Username & Password");
      });
  };
  return (
    <>
      <section className={studentStyles.subanner}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Login</h4>
              </div>
              <ul class="d-flex justify-content-center breadcrumb">
                <li class="breadcrumb-item">
                  <NavLink to="/">Home </NavLink>
                </li>
                <li class="breadcrumb-item"> Login</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className={studentStyles.addstudent}>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-12">
              <div className={studentStyles.w_400}>
                <form onSubmit={submitHandler}>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Password"
                      required
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Login"
                    />
                  </div>
                </form>
                <div>
                  <NavLink to="/signup">Create for new User</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
