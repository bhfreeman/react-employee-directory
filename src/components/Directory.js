import React from "react";
import EmployeeCard from "./EmployeeCard";

function Directory({ employees, handleSortBtn }) {
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th>Image</th>
          <th>
            Name{" "}
            <button onClick={handleSortBtn}>
              <svg
                name="ascend"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-sort-alpha-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
                />
                <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
              </svg>
            </button>
            <button onClick={handleSortBtn}>
              <svg
              name="desc"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-sort-alpha-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
                />
                <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
              </svg>
            </button>
          </th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((item) => {
          return (
            <EmployeeCard
              img={item.image}
              name={item.name}
              phone={item.phone}
              email={item.email}
              dob={item.dob}
              key={item.id}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Directory;
