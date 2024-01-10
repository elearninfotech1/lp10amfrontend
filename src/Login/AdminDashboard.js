import React, { useState } from "react";
import studentStyles from "./student.module.css";
import axios from "axios";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
const AdminDashboard = () => {
  return (
    <>
      <section className={studentStyles.subanner}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Admin Dashboard</h4>
              </div>
              <ul class="d-flex justify-content-center breadcrumb">
                <li class="breadcrumb-item">
                  <NavLink to="/">Home </NavLink>
                </li>
                <li class="breadcrumb-item"> Admin Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className={studentStyles.addstudent}>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
