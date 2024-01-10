import React, { useEffect, useState } from "react";
import studentStyles from "./student.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
const DeleteUser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/user")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log("unable to delete student");
      });
  });
  const deleteData = (id) => {
    axios
      .delete(`http://localhost:4000/user/${id}`)
      .then((res) => {
        alert("Data deleted succ...");
      })
      .catch((err) => {
        alert("Unable to delete the data");
      });
  };
  return (
    <>
      <section className={`${studentStyles.subanner}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Delete User</h4>
              </div>
              <ul className="d-flex justify-content-center breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home </NavLink>
                </li>
                <li className={`breadcrumb-item ${studentStyles.xyz}`}>
                  Delete User
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className={studentStyles.addstudent}>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-info">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((stu) => {
                      return (
                        <tr>
                          <td>{stu.id}</td>
                          <td>{stu.name}</td>
                          <td>{stu.address}</td>
                          <td>
                            <button
                              className="btn btn-danger me-3"
                              onClick={() => deleteData(stu.id)}
                            >
                              Delete
                            </button>

                            <NavLink to={`/editemployee/${stu.id}`}>
                              <button className="btn btn-warning">
                                Update
                              </button>
                            </NavLink>
                          </td>
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

export default DeleteUser;
