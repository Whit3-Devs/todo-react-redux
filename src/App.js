import React from 'react';
import { Route } from 'react-router-dom';
// Imports Components
import Navbar from './component/Navbar';
import About from './views/About';
import Description from './views/Description';
import Home from './views/Home';


const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path='/' component={Home}/>
      <Route exact path='/description' component={Description} />
      <Route exact path='/about' component={About} />
    </>
  )
}

export default App