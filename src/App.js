import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Container } from './components/ComponentsPartials';
import Footer from './components/Footer';
import Header from './components/Header';

import Routes from './Routes';

const App = ()=>{
  return (
    <BrowserRouter>
     <Container>
       <Header />
        <Routes />
      <Footer />
     </Container>
    </BrowserRouter>
  )
}
export default App;
