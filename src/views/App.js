import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

import About from './example/About';
import Home from './example/Home';
import MyComponents from './example/MyComponents';

// 2 Components Class Components and Funtion Compotions
// JSX -> Code Html ben trong file JS

function App() {
  return (
    <div className="App"> 
     
      <div className="topnav">
        <Link className="active" to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/about">About</Link>
      </div>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
                
        {/* <MyComponents/> */}
        {/* <MyComponents></MyComponents> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<MyComponents />} />
        <Route path="/about" element={ <About /> } />
      </Routes> 
      </header>
    </div>  
  );
}

export default App;

