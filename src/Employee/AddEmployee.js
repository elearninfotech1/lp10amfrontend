import React, { useState } from "react";
import studentStyles from "./student.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
const AddEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/employee", {
        name,
        email,
        phone,
        salary,
        address,
      })
      .then((res) => {
        alert("Student Added Succ...");
        setName("");
        setEmail("");
        setPhone("");
        setSalary("");
        setAddress("");
      })
      .catch((err) => {
        alert("Unable to add the Student ");
      });
  };
  return (
    <>
      <section className={studentStyles.subanner}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Add Employee</h4>
              </div>
              <ul class="d-flex justify-content-center breadcrumb">
                <li class="breadcrumb-item">
                  <NavLink to="/">Home </NavLink>
                </li>
                <li class="breadcrumb-item"> Add Employee</li>
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
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
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
                      name="phone"
                      placeholder="Phone"
                      required
                      pattern="[0-9]{10,}"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="salary"
                      placeholder="Salary"
                      required
                      pattern="[0-9]{4,}"
                      className="form-control"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      required
                      className="form-control"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Add Employee"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
