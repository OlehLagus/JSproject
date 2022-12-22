import React from 'react';
import './App.css';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Main from './component/main/Main';
import CheckIdleTime from './component/utility/Utility';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import LogginBar from './component/utility/LoginBar';






function App() {
  return (
      <div className="App" onmousemove={CheckIdleTime}>
        <Header />
        <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/loggin' element={<LogginBar/>}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
