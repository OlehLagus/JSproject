import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employee-list/employee-list';
import EmployeesAddForm from '../employee-add-form/employee-add-form';





function App() {
  const data = [
    {name: 'John C.', salary: 800, increase: false, id:1},
    {name: 'Alex M.', salary: 1000, increase: false, id:2},
    {name: 'Oleh L.', salary: 1200, increase: true, id:3}

  ]
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />

      </div>
      <EmployeesList data ={data} />
      <EmployeesAddForm />
    </div>
  )
}



export default App;
