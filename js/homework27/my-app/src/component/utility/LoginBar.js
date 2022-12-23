import './LogginBar.css';
import {useRef} from 'react';
import {
  useNavigate
} from "react-router-dom";

const userEmail = 'user@gmail.com';
const userPass = 'qwerty123';


function LogginBar () {
  const inputEmailValue = useRef(null)
  const inputPassValue = useRef(null)
  let navigateR = useNavigate();


 function setItemsForm () {
  if (inputEmailValue.current.value === userEmail && inputPassValue.current.value === userPass) {
    localStorage.setItem('User logged', JSON.stringify('true'))
    return navigateR('/')
  } else {
    localStorage.setItem('User logged', JSON.stringify('false'))
      return navigateR('/loggin')
  }
 }
  return (
    <div className="containerLoggin">
      <div className="logginBar">
     <input type="text" className="emailLogginForm" ref={inputEmailValue}></input>
     <input type="text" className="passLogginForm" ref={inputPassValue}></input>
     <button className="btnLogginForm" onClick={setItemsForm}>Войти</button>
    </div>
    </div>
  )
}


export default LogginBar