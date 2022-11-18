import React from 'react';
import './App.css';



const Header = () => {
  return <h2>Apple.ua</h2>
}

function Headertop() {
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

  return (<div className="container" style={styledBottomNav}>
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

const Main = () => {
  const styledMainBanner = {
    width: '100%',
    height: '500px',
    backgroundColor: 'blue'
  }

  const styledBanner = {
    width: '860px',
    height: '500px'
  }
  return (<div className="mainBanner" style={styledMainBanner}>
    <img src= {require('./banner.png')} style = {styledBanner}></img>
  </div>)
}


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
      <nav className="footerNav" style ={styledFooterNav}>
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

function App() {
  return (
    <div className="App">
      <Header />
      <Headertop />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
