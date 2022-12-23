import React from 'react';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Main from './component/main/Main';
import CheckIdleTime from './component/utility/Utility';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LogginBar from './component/utility/LoginBar';


function App() {
  return (
      <div className="App" onmousemove={CheckIdleTime}>
        <Header />
        <Routes>
        <Route path='/loggin' element={<LogginBar/>}/>
        <Route path='/' element={<Main/>}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
