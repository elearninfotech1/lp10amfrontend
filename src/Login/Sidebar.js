import React, { useState } from "react";
import studentStyles from "./student.module.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <ul>
              <li>
                <NavLink to="">Add Student</NavLink>
              </li>
              <li>
                <NavLink to="studentdata"> Student Data</NavLink>
              </li>
              <li>
                <NavLink to="deletestudent">Delete Student</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
