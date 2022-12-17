import React from 'react';
import './App.css';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Main from './component/main/Main';
import CheckIdleTime from './component/utility/Utility'




function App() {
  return (
    <div className="App" onmousemove={CheckIdleTime}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
