import './Header.css';
import LoginForm from "../utility/LoginForm";


function Header() {

  return (
  <div>
    <div className="styledBottomNav">
    <div><LoginForm /></div>
     <div className="headerLogo">Apple.ua</div>
      <nav className="bottomNav">
      <ul className="styledClearfix">
        <li className="styledBottom">
          <a className="styledBottomNavText" href="#">Iphone</a>
        </li>
        <li className="styledBottom">
          <a className="styledBottomNavText" href="#">MacBook</a>
        </li>
        <li className="styledBottom">
          <a className="styledBottomNavText" href="#">IMac</a>
        </li>
        <li className="styledBottom">
          <a className="styledBottomNavText" href="#">Apple Watch</a>
        </li>
      </ul>
    </nav>
  </div>
  </div>
  )
}

export default Header;