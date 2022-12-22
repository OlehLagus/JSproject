import './LogginBar.css'


function LogginBar () {
  return (
    <div className="containerLoggin">
      <div className="logginBar">
     <input type="text" className="emailLogginForm" value="Email"/>
     <input type="text" className="passLogginForm" value="Password"/>
     <button className="btnLogginForm">Войти</button>
    </div>
    </div>
  )
}






export default LogginBar