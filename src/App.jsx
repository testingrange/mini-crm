import EmployeesOutput from './components/EmployeesOutput';
import Header from './components/Header'
import UserInfo from './components/UserInfo/UserInfo';
import EmployeeContextProvider from './store/employees-context';

function App() {
  return (
    <EmployeeContextProvider>
      <Header />
      <UserInfo />
      <EmployeesOutput />
    </EmployeeContextProvider>
  );
}

export default App;
