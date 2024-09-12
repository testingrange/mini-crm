import { useRef, useContext } from "react";
import { EmployeeContext } from "../../store/employees-context";

import Input from "../Input";

export default function UserInput() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const dobRef = useRef();
  const ssnRef = useRef();
  const emailRef = useRef();
  const salaryRef = useRef();

  const { addEmployee } = useContext(EmployeeContext);
  
  const handleAddNewEmployee = () => {
    addEmployee(firstNameRef.current.value,
        lastNameRef.current.value,
        dobRef.current.value,
        ssnRef.current.value,
        emailRef.current.value,
        salaryRef.current.value
    )
    firstNameRef.current.value = ""
    lastNameRef.current.value = ""
    dobRef.current.value = ""
    ssnRef.current.value = ""
    emailRef.current.value = ""
    salaryRef.current.value = ""
  }

  return (
    <>
      <div className="flex justify-center gap-10 my-12">
        <div>
          <Input label="FirstName" name="fname" type="text" ref={firstNameRef} />
          <Input label="LastName" name="lname" type="text" ref={lastNameRef} />
          <Input label="DOB" name="dob" type="date" ref={dobRef} />
        </div>
        <div>
          <Input label="SSN" name="ssn" type="text" required pattern="\d{3}-?\d{2}-?\d{4}" ref={ssnRef} />
          <Input label="Email" name="email" type="email" ref={emailRef} />
          <Input label="Salary/yr" name="salary" type="number" ref={salaryRef} />
        </div>
      </div>
      <div className="flex">
        <button 
            className="mx-auto text-xl text-slate-600 w-28 font-bold border-2 border-slate-400 bg-slate-300 rounded-md hover:bg-slate-400 hover:text-slate-100"
            onClick={handleAddNewEmployee}
        >
          Insert
        </button>
      </div>
    </>
  );
}
