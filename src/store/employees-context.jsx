import { createContext, useReducer } from "react";

export const EmployeeContext = createContext({
  employeesData: [],
  employeeEditing: {},
  addEmployee: () => {},
  deleteEmployee: () => {},
  editEmployee: () => {},
  cancelEditing: () => {},
  updateEmployee: () => {},
});

const employeesDataReducer = (state, action) => {
  if (action.type === "ADD_EMPLOYEE") {
    const updatedEmployees = [...state.employeesData];
    const employeeId =
      action.payload.dob.replace(/-/g, "") + action.payload.ssn.slice(5);

    updatedEmployees.push({
      id: employeeId,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      dob: action.payload.dob,
      ssn: action.payload.ssn,
      email: action.payload.email,
      salary: action.payload.salary,
      street: '',
      aptnum: '',
      state: '',
      zip: '',
      phoneNum: '',
      position: '',
      info: '',
    });
    console.log("Updated Employees ", updatedEmployees);
    console.log("StateEmployees Data ", state.employeesData);

    return {
      ...state,
      employeesData: updatedEmployees,
    };
  } else if (action.type === "DELETE_EMPLOYEE") {
    const updatedEmployees = [...state.employeesData];

    console.log("Employee ID at payload, ", action.payload.employeeId);
    const filteredEmployees = updatedEmployees.filter(
      (employee) => employee.id !== action.payload.employeeId
    );

    console.log("Employees data with deleted employee ", filteredEmployees);

    return {
      ...state,
      employeesData: filteredEmployees,
    };
  } else if (action.type === "EDIT_EMPLOYEE") {
    const employeeEditing = { ...state.employeeEditing };
    employeeEditing.editing = true;
    employeeEditing.id = action.payload.employeeId;

    console.log(
      "Employee Editing - ",
      employeeEditing.editing,
      "EmployeeId - ",
      employeeEditing.id
    );

    return {
      ...state,
      employeeEditing: employeeEditing,
    };
  } else if (action.type === "CANCEL_EDITING_EMPLOYEE") {
    const employeeEditing = { ...state.employeeEditing };
    employeeEditing.editing = false;
    employeeEditing.id = undefined;

    console.log(
      "Employee Editing - ",
      employeeEditing.editing,
      "EmployeeId - ",
      employeeEditing.id
    );

    return {
      ...state,
      employeeEditing: employeeEditing,
    };
  } else if (action.type === "UPDATE_EMPLOYEE") {
    const updatedEmployee = [...state.employeesData]
    console.log("State.employee.id id - ", state.employeeEditing.id)
    console.log("updatedEmployee is ", updatedEmployee)
    const editedEmployee = updatedEmployee.filter(employee => employee.id === state.employeeEditing.id)[0]
    console.log("Edited Employee is ", editedEmployee)
    editedEmployee.firstName = action.payload.firstName
    editedEmployee.lastName = action.payload.lastName;
    editedEmployee.dob = action.payload.dob;
    editedEmployee.ssn = action.payload.ssn
    editedEmployee.email = action.payload.email
    editedEmployee.salary = action.payload.salary
    editedEmployee.street = action.payload.street
    editedEmployee.aptnum = action.payload.aptnum
    editedEmployee.state = action.payload.state
    editedEmployee.zip = action.payload.zip
    editedEmployee.phoneNum = action.payload.phoneNum
    editedEmployee.position = action.payload.position
    editedEmployee.info = action.payload.info

    console.log("Updated Employee with id - , ", editedEmployee.id, " is: ", editedEmployee)

    return {
        ...state,
        employeesData: updatedEmployee
    }
  }
};

export default function EmployeeContextProvider({ children }) {
  const [employeesDataState, employeesDatadispatch] = useReducer(
    employeesDataReducer,
    {
      employeesData: [],
      employeeEditing: {
        editing: false,
        id: undefined,
      },
    }
  );

  const handleAddEmployee = (firstName, lastName, dob, ssn, email, salary) => {
    employeesDatadispatch({
      type: "ADD_EMPLOYEE",
      payload: {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        ssn: ssn,
        email: email,
        salary: salary,
      },
    });
  };

  const handleDeleteEmployee = (employeeId) => {
    employeesDatadispatch({
      type: "DELETE_EMPLOYEE",
      payload: {
        employeeId,
      },
    });
  };

  const handleEditEmployee = (employeeId) => {
    employeesDatadispatch({
      type: "EDIT_EMPLOYEE",
      payload: {
        employeeId: employeeId,
      },
    });
  };

  const handleCancelEmployeeEditing = () => {
    employeesDatadispatch({
      type: "CANCEL_EDITING_EMPLOYEE",
    });
  };

  const handleUpdateEmployee = (
    firstName,
    lastName,
    dob,
    ssn,
    email,
    salary,
    street,
    aptnum,
    state,
    zip,
    phoneNum,
    position,
    info
  ) => {
    employeesDatadispatch({
      type: "UPDATE_EMPLOYEE",
      payload: {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        ssn: ssn,
        email: email,
        salary: salary,
        street: street,
        aptnum: aptnum,
        state: state,
        zip: zip,
        phoneNum: phoneNum,
        position: position,
        info: info
      },
    });
  };

  const ctxValue = {
    employeesData: employeesDataState.employeesData,
    employeeEditing: employeesDataState.employeeEditing,
    addEmployee: handleAddEmployee,
    deleteEmployee: handleDeleteEmployee,
    editEmployee: handleEditEmployee,
    cancelEditing: handleCancelEmployeeEditing,
    updateEmployee: handleUpdateEmployee,
  };

  return (
    <EmployeeContext.Provider value={ctxValue}>
      {children}
    </EmployeeContext.Provider>
  );
}
