import React, { useState } from "react";
import studentStyles from "./student.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
const AddStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://lp10ambackend.onrender.com/student", {
        name,
        email,
        phone,
        address,
      })
      .then((res) => {
        alert("Student Added Succ...");
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
      })
      .catch((err) => {
        alert("Unable to add the Student ");
      });
  };
  return (
    <>
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
                      value="Add Student"
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

export default AddStudent;
