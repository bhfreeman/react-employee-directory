import React from "react";
import EmployeeCard from "./EmployeeCard";

function Directory({employees, filterEmployees}) {

  return (
    <table>
      <thead>
      <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
      {employees.map((item) => {
       return <EmployeeCard
          img={item.image}
          name={item.name}
          phone={item.phone}
          email={item.email}
          dob={item.dob}
        />;
      })}
      </tbody>
    </table>
  );
}

export default Directory;
