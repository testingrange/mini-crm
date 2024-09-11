import { createContext, useReducer } from "react";

export const EmployeeContext = createContext({
    employeesData: [],
    employeeEditing: {},
    addEmployee: () => {},
    deleteEmployee: () => {},
    editEmployee: () => {}
})


   const employeesDataReducer = (state, action) => {
    if (action.type === 'ADD_EMPLOYEE') {
        const updatedEmployees = [...state.employeesData]
        const employeeId = action.payload.dob.replace(/-/g, '') + action.payload.ssn.slice(5)

        updatedEmployees.push({
            id: employeeId,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName, 
            dob: action.payload.dob,
            ssn: action.payload.ssn,
            email: action.payload.email,
            salary: action.payload.salary
        })
        console.log("Updated Employees ", updatedEmployees)
        console.log("StateEmployees Data ", state.employeesData)

        return {
            ...state,
            employeesData: updatedEmployees,
        }
    }
    else if (action.type === "DELETE_EMPLOYEE") {
        const updatedEmployees = [...state.employeesData]

        console.log("Employee ID at payload, ", action.payload.employeeId)
        const filteredEmployees = updatedEmployees.filter((employee) => employee.id !== action.payload.employeeId)

        console.log("Employees data with deleted employee ", filteredEmployees)

        return {
            ...state,
            employeesData: filteredEmployees,
        }
    }
    else if (action.type === "EDIT_EMPLOYEE") {
        const employeeEditing = {...state.employeeEditing}
        employeeEditing.editing = true
        employeeEditing.id = action.payload.employeeId

        console.log("Employee Editing - ", employeeEditing.editing, "EmployeeId - ", employeeEditing.id)

        return {
            ...state,
            employeeEditing: employeeEditing
        }
    }    
   }


export default function EmployeeContextProvider({ children }) {
    
    
    const [employeesDataState, employeesDatadispatch] = useReducer(
        employeesDataReducer,
        {
            employeesData: [],
            employeeEditing: {
                editing: false,
                id: undefined
            }
        }
    )

    const handleAddEmployee = (firstName, lastName, dob, ssn, email, salary) => {
        employeesDatadispatch({
            type: 'ADD_EMPLOYEE',
            payload: {
                firstName,
                lastName,
                dob,
                ssn,
                email,
                salary
            }
        })
    }

    const handleDeleteEmployee = (employeeId) => {
        employeesDatadispatch({
            type: 'DELETE_EMPLOYEE',
            payload: {
                employeeId: employeeId
            }
        })
    }

    const handleEditEmployee = (employeeId) => {
        employeesDatadispatch({
            type: 'EDIT_EMPLOYEE',
            payload: {
                employeeId: employeeId
            }
        })
    }


    const ctxValue = {
        employeesData: employeesDataState.employeesData,
        employeeEditing: employeesDataState.employeeEditing,
        addEmployee: handleAddEmployee,
        deleteEmployee: handleDeleteEmployee,
        editEmployee: handleEditEmployee
    }

    return <EmployeeContext.Provider value={ctxValue}>
        {children}
    </EmployeeContext.Provider>
}