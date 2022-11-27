

const Footer = () => {
  const styledFooter = {
    width: '100%',
    height: '100px',
    backgroundColor: 'black'
  }
  const styledFooterNav = {
    height: '50px'
  }
  const styledFooterList = {
    listStyle: 'none',
    marginRight: '20px',
    width: '160px',
    height: '32px',
    marginTop: '5px'
  }
  const styledFooterText = {
    color: 'white',
    fontSize: '10px',
    textDecoration: 'none',
    backgroundSize: 'cover',
    width: '1.91667em',
    maxWidth: '39.1px',
  }
  const styledFooterMain = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0',
    padding: '30px'
  }

  return (
    <div className='footer' style={styledFooter}>
      <nav className="footerNav" style={styledFooterNav}>
        <ul className="footerMain" style={styledFooterMain}>
          <li className="footerList" style={styledFooterList}>
            <a className="footerNavText" style={styledFooterText} href="#">Privacy Policy</a>
          </li>
          <li className="footerList" style={styledFooterList}>
            <a className="footerNavText" style={styledFooterText} href="#">Site Map</a>
          </li>
          <li className="footerList" style={styledFooterList}>
            <a className="footerNavText" style={styledFooterText} href="#">Legal</a>
          </li>
          <li className="footerList" style={styledFooterList}>
            <a className="footerNavText" style={styledFooterText} href="#">Sales and Refunds</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Footer;