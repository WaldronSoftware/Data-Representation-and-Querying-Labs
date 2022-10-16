import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Content from './components/Content.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';




class App extends React.Component {

  render() 
  {
    return (<div>

      <Navbar></Navbar>

      
      <Header></Header>

      <p style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10vh',}}><h1>Hello World</h1></p>
      <p style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    }}><h2>It is {new Date().toLocaleTimeString()}</h2></p>
    <Footer></Footer>
    <Content></Content>

    
    
    </div>
    
    
    );


  }
  
}



export default App;
