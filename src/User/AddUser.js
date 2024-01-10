import React, { useState } from "react";
import studentStyles from "./student.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
const AddUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/user/", {
        id,
        name,
        address,
      })
      .then((res) => {
        alert("Student Added Succ...");
        setId("");
        setName("");
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
                <h4>Add User</h4>
              </div>
              <ul class="d-flex justify-content-center breadcrumb">
                <li class="breadcrumb-item">
                  <NavLink to="/">Home </NavLink>
                </li>
                <li class="breadcrumb-item"> Add User</li>
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
                      name="id"
                      placeholder="ID"
                      required
                      className="form-control"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    />
                  </div>
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

export default AddUser;
