import {useState, useEffect, useRef} from 'react';
import {
  useNavigate
} from "react-router-dom";

const userEmail = 'user@gmail.com';
const userPass = 'qwerty123';



function LoginForm () {
  
  const inputEmailValue = useRef(null)
  const inputPassValue = useRef(null)
  let navigate = useNavigate();


 function setItems () {
  if (inputEmailValue.current.value === userEmail && inputPassValue.current.value === userPass) {
    localStorage.setItem('User logged', JSON.stringify('true'))
    return navigate('/')
  } else {
    localStorage.setItem('User logged', JSON.stringify('false'))
      return navigate('/loggin')
  }
 }

  return (
    <div className="logginForm">
      <input type="text" className="loginFormEmail" ref={inputEmailValue}/>
      <input type="text" className="loginFormPass" ref={inputPassValue}/>
      <button className="loginFormButton" onClick={setItems}>Войти</button>
    </div>
  )

  
}


export default LoginForm