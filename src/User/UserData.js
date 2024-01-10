import React, { useEffect, useState } from "react";
import studentStyles from "./student.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
const UserData = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/user")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <section className={studentStyles.subanner}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Employee Data</h4>
              </div>
              <ul class="d-flex justify-content-center breadcrumb">
                <li class="breadcrumb-item">
                  <NavLink to="/">Home </NavLink>
                </li>
                <li class="breadcrumb-item"> Employee Data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className={studentStyles.addstudent}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <NavLink to="/addstudent">
                <button className="btn btn-warning my-4 float-end">
                  +Add Student
                </button>
              </NavLink>
              <div className="clearfix"></div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-info">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((emp) => {
                      return (
                        <tr>
                          <td>{emp.id}</td>
                          <td>{emp.name}</td>
                          <td>{emp.address}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
