
// const Header = () => {
//   return <h2>Apple.ua</h2>
// }

function Header() {
  const styledBottomNav = {
    height: '50px',
    backgroundColor: 'rgba(0,0,0,0.92'
  }
  const styledClearfix = {
    display: 'flex',
    justifyContent: 'center'
  }
  const styledBottom = {
    listStyle: 'none',
    marginRight: '20px',
    width: '160px',
    height: '32px',
    marginTop: '5px'
  }
  const styledBottomNavText = {
    fontSize: '24px',
    textDecoration: 'none',
    backgroundSize: 'cover',
    width: '1.91667em',
    maxWidth: '39.1px',
    color: '#808080'
  }

  return (
  <div className="container" style={styledBottomNav}>
    <nav className="bottomNav">
      <ul className="clearfix" style={styledClearfix}>
        <li className="bottom" style={styledBottom}>
          <a className="bottomNavText" style={styledBottomNavText} href="#">Iphone</a>
        </li>
        <li className="bottom" style={styledBottom}>
          <a className="bottomNavText" style={styledBottomNavText} href="#">MacBook</a>
        </li>
        <li className="bottom" style={styledBottom}>
          <a className="bottomNavText" style={styledBottomNavText} href="#">IMac</a>
        </li>
        <li className="bottom" style={styledBottom}>
          <a className="bottomNavText" style={styledBottomNavText} href="#">Apple Watch</a>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Header;