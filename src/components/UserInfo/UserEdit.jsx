import { useRef, useContext } from 'react'
import { EmployeeContext } from '../../store/employees-context'
import Input from '../Input'

export default function UserEdit() {

    const { employeesData, employeeEditing, cancelEditing } = useContext(EmployeeContext)

    const editData = employeesData.filter(employee => employee.id === employeeEditing.id)[0]

    console.log("Editing Data, ", editData)

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const dobRef = useRef();
    const ssnRef = useRef();
    const emailRef = useRef();
    const salaryRef = useRef();
    const streetRef = useRef();
    const aptRef = useRef();
    const stateRef = useRef();
    const zipRef = useRef();
    const phoneRef = useRef();
    const posRef = useRef();
    const infoRef = useRef();


    const handleCancelEditing = () => {
        console.log(editData)
        cancelEditing()        
    }


    return (
        <div className="flex justify-center gap-10 my-12">
            <div>
                <Input label="FirstName" name="fname" type="text" value={editData.firstName} ref={firstNameRef}/>
                <Input label="LastName" name="lname" type="text" value={editData.lastName} ref={lastNameRef}/>
                <Input label="DOB" name="dob" type="date" value={editData.dob} ref={dobRef}/>
            </div>
            <div>
                <Input label="SSN" name="ssn" type="number" value={editData.ssn} ref={ssnRef}/>
                <Input label="Email" name="email" type="text" value={editData.email} ref={emailRef}/>
                <Input label="Salary/yr" name="salary" type="number" value={editData.salary} ref={salaryRef}/>
            </div>
            <div>
                <Input label="Street" name="street" type="text" value={editData.street} ref={streetRef}/>
                <Input label="AptNumber" name="aptnum" type="text" value={editData.aptnum} ref={aptRef}/>
                <Input label="State" name="state" type="text" value={editData.state} ref={stateRef}/>
            </div>
            <div>
                <Input label="Zip" name="zip" type="number" value={editData.zip} ref={zipRef}/>
                <Input label="Phone" name="phoneNum" type="tel" value={editData.phoneNum} ref={phoneRef}/>
                <Input label="Position" name="position" type="text" value={editData.position} ref={posRef}/>
            </div>
            <div>
                <Input label="Info" name="info" type="textarea" value={editData.info} ref={infoRef}/>
            </div>
            <div>
                <button>Save</button>
                <button onClick={handleCancelEditing}>Cancel</button>
            </div>
        </div>
    )
}