import EmployeesListItem from '../employee-list-item/employee-list-item';
import './employee-list.css';

const EmployeesList = ({data}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return(
      <EmployeesListItem key={id} {...itemProps}/>
    )
  })
  return(
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}


export default EmployeesList