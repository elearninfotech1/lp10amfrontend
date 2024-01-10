import React, { useEffect, useState } from "react";
import studentStyles from "./student.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
const StudentDataFront = () => {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("https://lp10ambackend.onrender.com/student")
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <section className={`${studentStyles.subanner}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Student Data</h4>
              </div>
              <ul className="d-flex justify-content-center breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home </NavLink>
                </li>
                <li className={`breadcrumb-item ${studentStyles.xyz}`}>
                  Student Data
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className={studentStyles.addstudent}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="clearfix"></div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-info">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {student.map((stu) => {
                      return (
                        <tr>
                          <td>{stu.name}</td>
                          <td>{stu.email}</td>
                          <td>{stu.phone}</td>
                          <td>{stu.address}</td>
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

export default StudentDataFront;
