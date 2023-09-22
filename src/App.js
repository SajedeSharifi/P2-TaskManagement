import React from 'react';
import NavbarHeader from './components/header/navbar.component';
import Footer from './components/footer/footer.component';
import Body from './components/body/body.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
