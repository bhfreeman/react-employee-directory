import React from "react";
import EmployeeCard from "./EmployeeCard";

function Directory({employees}) {
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
          img={item.picture.thumbnail}
          name={item.name.first + ' ' + item.name.last}
          phone={item.cell}
          email={item.email}
          dob={item.dob.date}
        />;
      })}
      </tbody>
    </table>
  );
}

export default Directory;
