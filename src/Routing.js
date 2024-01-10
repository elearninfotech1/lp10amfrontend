import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentData from "./Student/StudentData";
import AddStudent from "./Student/AddStudent";
import DeleteStudent from "./Student/DeleteStudent";
import EditStudent from "./Student/EditStudent";
import EmployeeData from "./Employee/EmployeeData";
import AddEmployee from "./Employee/AddEmployee";
import DeleteEmployee from "./Employee/DeleteEmployee";
import EditEmployee from "./Employee/EditEmployee";
import AddUser from "./User/AddUser";
import UserData from "./User/UserData";
import DeleteUser from "./User/DeleteUser";
import Home from "./Public/Home";
import Signup from "./Login/Signup";
import Login from "./Login/Login";
import AdminDashboard from "./Login/AdminDashboard";
import StudentDataFront from "./Student/StudentDataFront";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/deletestudent" element={<DeleteStudent />} />
        <Route path="/editstudent/:sno" element={<EditStudent />} />
        <Route path="/employeedata" element={<EmployeeData />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/deleteemployee" element={<DeleteEmployee />} />
        <Route path="/editemployee/:sno" element={<EditEmployee />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/userdata" element={<UserData />} />
        <Route path="/deleteuser" element={<DeleteUser />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/admindashboard/" element={<AdminDashboard />}>
          <Route path="" element={<AddStudent />} />
          <Route path="studentdata" element={<StudentData />} />
          <Route path="deletestudent" element={<DeleteStudent />} />
        </Route>

        <Route path="/studentdata" element={<StudentDataFront />} />
      </Routes>
    </>
  );
};

export default Routing;
