import { useContext } from "react";

import { EmployeeContext } from "../store/employees-context";

export default function EmployeesOutput() {
  const { employeesData, deleteEmployee, editEmployee } = useContext(EmployeeContext);

  return (
    <div>
      {employeesData.map((employee) => (
        <li key={employee.id}>
          {employee.firstName} {employee.lastName} {employee.dob}{" "}
          <button 
            onClick={
              () => {
                editEmployee(employee.id)
              }
            }
          >
            Edit
          </button>

          <button 
            onClick={
                () => {
                    console.log("employeeId in employees output component delete button clicked on, ", employee.id)
                    deleteEmployee(employee.id)
                      }
                    }>
                        Delete
                    </button>
        </li>
      ))}
    </div>
  );
}
