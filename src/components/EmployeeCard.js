import React from "react";

function EmployeeCard({ img, name, phone, email, dob, id }) {
  return (
      <tr key={id}>
        <td><img src={img} alt={name}/></td>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{dob}</td>
      </tr>
  );
}

export default EmployeeCard;
