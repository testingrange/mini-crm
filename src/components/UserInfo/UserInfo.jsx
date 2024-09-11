import { useContext } from 'react'
import { EmployeeContext } from '../../store/employees-context'
import UserInput from './UserInput'
import UserEdit from './UserEdit'

export default function UserInfo() {

    const { editEmployee } = useContext(EmployeeContext)

    return (
        <>
            <UserInput />
        </>
    )
}