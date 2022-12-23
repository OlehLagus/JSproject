import LoginForm from '../utility/LoginForm';
import './Footer.css'

const Footer = () => {

  return (
    <div className='styledFooter'>
      <div>{LoginForm}</div>
      <nav className="styledFooterNav">
        <ul className="styledFooterMain">
          <li className="styledFooterList">
            <a className="styledFooterText" href="#">Privacy Policy</a>
          </li>
          <li className="styledFooterList">
            <a className="styledFooterText" href="#">Site Map</a>
          </li>
          <li className="styledFooterList">
            <a className="styledFooterText" href="#">Legal</a>
          </li>
          <li className="styledFooterList">
            <a className="styledFooterText" href="#">Sales and Refunds</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Footer;