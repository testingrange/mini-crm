import { useRef, useContext, useEffect } from "react";
import { EmployeeContext } from "../../store/employees-context";
import Input from "../Input";

export default function UserEdit() {
  const { employeesData, employeeEditing, cancelEditing, updateEmployee } =
    useContext(EmployeeContext);

  const editData = employeesData.filter(
    (employee) => employee.id === employeeEditing.id
  )[0];

  console.log("Editing Data, ", editData);
  
  const inputRefs = useRef({})


  useEffect(() => {
    if (inputRefs.current.firstName) {
        inputRefs.current.firstName.value = editData.firstName
    }
    if (inputRefs.current.lastName) {
        inputRefs.current.lastName.value = editData.lastName
    }
    if (inputRefs.current.dob) {
        inputRefs.current.dob.value = editData.dob
    }
    if (inputRefs.current.ssn) {
        inputRefs.current.ssn.value = editData.ssn
    }
    if (inputRefs.current.email) {
        inputRefs.current.email.value = editData.email
    }
    if (inputRefs.current.salary) {
        inputRefs.current.salary.value = editData.salary
    }
    if (inputRefs.current.street) {
        inputRefs.current.street.value = editData.street
    }
    if (inputRefs.current.aptNum) {
        inputRefs.current.aptNum.value = editData.aptnum
    }
    if (inputRefs.current.state) {
        inputRefs.current.state.value = editData.state
    }
    if (inputRefs.current.zip) {
        inputRefs.current.zip.value = editData.zip
    }
    if (inputRefs.current.phoneNum) {
        inputRefs.current.phoneNum.value = editData.phoneNum
    }
    if (inputRefs.current.position) {
        inputRefs.current.position.value = editData.position
    }
    if (inputRefs.current.info) {
        inputRefs.current.info.value = editData.info
    }
  }, [])
    
    
  const handleCancelEditing = () => {
    console.log(editData);
    cancelEditing();
  };

//   const handleUpdateEmployee = () => {
//     console.log("HandleUpdateEmployee was called");
//     updateEmployee(
//       firstNameRef.current.value,
//       lastNameRef.current.value,
//       dobRef.current.value,
//       ssnRef.current.value,
//       emailRef.current.value,
//       salaryRef.current.value,
//       streetRef.current.value,
//       aptRef.current.value,
//       stateRef.current.value,
//       zipRef.current.value,
//       phoneRef.current.value,
//       posRef.current.value,
//       infoRef.current.value
//     );
//   };

  const handleUpdateEmployee = () => {
    console.log("HandleUpdateEmployee was called");
    updateEmployee(
      inputRefs.current.firstName.value,
      inputRefs.current.lastName.value,
      inputRefs.current.dob.value,
      inputRefs.current.ssn.value,
      inputRefs.current.email.value,
      inputRefs.current.salary.value,
      inputRefs.current.street.value,
      inputRefs.current.aptNum.value,
      inputRefs.current.state.value,
      inputRefs.current.zip.value,
      inputRefs.current.phoneNum.value,
      inputRefs.current.position.value,
      inputRefs.current.info.value
    );
  };

//   console.log("firstNameRef.current.value is ", firstNameRef.current.value)

  return (
    
    <div className="flex justify-center gap-10 my-12">
      <div>
        <Input
          label="FirstName"
          name="fname"
          type="text"
          ref={el => inputRefs.current.firstName = el}
        />
        <Input
          label="LastName"
          name="lname"
          type="text"
          ref={el => inputRefs.current.lastName = el}
        />
        <Input
          label="DOB"
          name="dob"
          type="date"
          ref={el => inputRefs.current.dob = el}
        />
      </div>
      <div>
        <Input
          label="SSN"
          name="ssn"
          type="number"

          ref={el => inputRefs.current.ssn = el}
        />
        <Input
          label="Email"
          name="email"
          type="text"
          ref={el => inputRefs.current.email = el}
        />
        <Input
          label="Salary/yr"
          name="salary"
          type="number"
          ref={el => inputRefs.current.salary = el}
        />
      </div>
      <div>
        <Input
          label="Street"
          name="street"
          type="text"
          ref={el => inputRefs.current.street = el}
        />
        <Input
          label="AptNumber"
          name="aptnum"
          type="text"
          ref={el => inputRefs.current.aptNum = el}
        />
        <Input
          label="State"
          name="state"
          type="text"
          ref={el => inputRefs.current.state = el}
        />
      </div>
      <div>
        <Input
          label="Zip"
          name="zip"
          type="number"
          ref={el => inputRefs.current.zip = el}
        />
        <Input
          label="Phone"
          name="phoneNum"
          type="tel"
          ref={el => inputRefs.current.phoneNum = el}
        />
        <Input
          label="Position"
          name="position"
          type="text"
          ref={el => inputRefs.current.position = el}
        />
      </div>
      <div>
        <Input
          label="Info"
          name="info"
          type="textarea"
          ref={el => inputRefs.current.info = el}
        />
      </div>
      <div>
        <button onClick={handleUpdateEmployee}>Save</button>
        <button onClick={handleCancelEditing}>Back</button>
      </div>
    </div>
  );
}
