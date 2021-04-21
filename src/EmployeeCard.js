import React from "react";

function EmployeeCard({ img, name, phone, email, dob }) {
  return (
      <tr>
        <td>{img}</td>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{dob}</td>
      </tr>
  );
}

export default EmployeeCard;
