import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import studentStyles from "./student.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
const EditEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { sno } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/student/${sno}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setAddress(res.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/student/${sno}`, {
        name,
        email,
        phone,
        address,
      })
      .then((res) => {
        alert("Data Updated Succ...");
        navigate("/");
      })
      .catch((err) => {
        alert("unable to update the data");
      });
  };
  return (
    <>
      <section className={studentStyles.subanner}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Edit Student</h4>
              </div>
              <ul class="d-flex justify-content-center breadcrumb">
                <li class="breadcrumb-item">
                  <NavLink to="/">Home </NavLink>
                </li>
                <li class="breadcrumb-item"> Edit Student</li>
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

export default EditEmployee;
