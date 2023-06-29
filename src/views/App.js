import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

import About from './example/About';
import Home from './example/Home';
import MyComponent from './example/MyComponent';
import Content from '../BT/UseEffect/Content';



function App() {
  return (
    <div className="App"> 
      
      <div className="topnav">
        <Link className="active" to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/about">About</Link>
        <Link to="/content">Content</Link>
      </div>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
                
        {/* <MyComponent/> */}
        {/* <MyComponent></MyComponent> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<MyComponent />} />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={ <Content /> } />
      </Routes> 
      </header>
    </div>  
  );
}

export default App;

