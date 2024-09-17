import { useRef, useContext } from "react";
import { EmployeeContext } from "../../store/employees-context";
import Input from "../Input";

export default function UserEdit() {
  const { employeesData, employeeEditing, cancelEditing, updateEmployee } =
    useContext(EmployeeContext);

  const editData = employeesData.filter(
    (employee) => employee.id === employeeEditing.id
  )[0];

  console.log("Editing Data, ", editData);

  const firstNameRef = useRef(editData.firstName);
  const lastNameRef = useRef(editData.lastName);
  const dobRef = useRef(editData.dob);
  const ssnRef = useRef(editData.ssn);
  const emailRef = useRef(editData.email);
  const salaryRef = useRef(editData.salary);
  const streetRef = useRef(editData.street);
  const aptRef = useRef(editData.aptnum);
  const stateRef = useRef(editData.state);
  const zipRef = useRef(editData.zip);
  const phoneRef = useRef(editData.phoneNum);
  const posRef = useRef(editData.position);
  const infoRef = useRef(editData.info);

  const handleCancelEditing = () => {
    console.log(editData);
    cancelEditing();
  };

  const handleUpdateEmployee = () => {
    console.log("HandleUpdateEmployee was called");
    updateEmployee(
      firstNameRef.current.value,
      lastNameRef.current.value,
      dobRef.current.value,
      ssnRef.current.value,
      emailRef.current.value,
      salaryRef.current.value,
      streetRef.current.value,
      aptRef.current.value,
      stateRef.current.value,
      zipRef.current.value,
      phoneRef.current.value,
      posRef.current.value,
      infoRef.current.value
    );
  };

  return (
    <div className="flex justify-center gap-10 my-12">
      <div>
        <Input
          label="FirstName"
          name="fname"
          type="text"
          value={editData.firstName}
          ref={firstNameRef}
        />
        <Input
          label="LastName"
          name="lname"
          type="text"
        //   value={editData.lastName}
          ref={lastNameRef}
        />
        <Input
          label="DOB"
          name="dob"
          type="date"
        //   value={editData.dob}
          ref={dobRef}
        />
      </div>
      <div>
        <Input
          label="SSN"
          name="ssn"
          type="number"
        //   value={editData.ssn}
          ref={ssnRef}
        />
        <Input
          label="Email"
          name="email"
          type="text"
        //   value={editData.email}
          ref={emailRef}
        />
        <Input
          label="Salary/yr"
          name="salary"
          type="number"
        //   value={editData.salary}
          ref={salaryRef}
        />
      </div>
      <div>
        <Input
          label="Street"
          name="street"
          type="text"
        //   value={editData.street}
          ref={streetRef}
        />
        <Input
          label="AptNumber"
          name="aptnum"
          type="text"
        //   value={editData.aptnum}
          ref={aptRef}
        />
        <Input
          label="State"
          name="state"
          type="text"
        //   value={editData.state}
          ref={stateRef}
        />
      </div>
      <div>
        <Input
          label="Zip"
          name="zip"
          type="number"
        //   value={editData.zip}
          ref={zipRef}
        />
        <Input
          label="Phone"
          name="phoneNum"
          type="tel"
        //   value={editData.phoneNum}
          ref={phoneRef}
        />
        <Input
          label="Position"
          name="position"
          type="text"
        //   value={editData.position}
          ref={posRef}
        />
      </div>
      <div>
        <Input
          label="Info"
          name="info"
          type="textarea"
        //   value={editData.info}
          ref={infoRef}
        />
      </div>
      <div>
        <button onClick={handleUpdateEmployee}>Save</button>
        <button onClick={handleCancelEditing}>Back</button>
      </div>
    </div>
  );
}
