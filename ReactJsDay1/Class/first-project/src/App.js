// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Menu from './components/menu/Menu';
import Counter from './components/counter/Counter';

function App() {
  const menus = [
    { path: "/", label: "Trang chủ" },
    { path: "/shop", label: "Cửa hàng" },
    { path: "/about", label: "Về chúng tôi" },
    { path: "/contact", label: "Liên hệ" },
]
  return (
    <React.Fragment>
      <h1 className='heading' style={{color : "red", backgroundColor : "black"}}>Hello world {1 + 1}</h1>
      <div className="intro-content">
          <h1 className="intro-title">Fashion Trends</h1>
          <p className="intro-description">There are some trends that are just too plain wacky to really affect your wardrobe,
              so for that reason we've left out a few ideas we know you'd rather sidestep.</p>
          <a href="#" className="intro-btn">Buy now</a>
      </div>

      <Menu menus={menus}/>

      <Counter />
    </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
