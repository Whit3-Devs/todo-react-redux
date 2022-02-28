import React from "react";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//Imports NextUI
import { 
  NextUIProvider,
  useTheme, 
  Container, 
  Row, 
  Text
} from '@nextui-org/react';
import {  } from '@nextui-org/react';



// Imports Components
import Navbar from "./component/Navbar";
import About from "./views/About";
import Description from "./views/Description";
import Home from "./views/Home";

const App = () => {

  const { theme } = useTheme();

  return (
    <NextUIProvider>
        <Row justify="center" align="center">
          <Navbar />
        </Row>
      <Container xl>
          <Route exact path="/" component={Home} />
          <Route exact path="/description" component={Description} />
          <Route exact path="/about" component={About} />
      </Container>
    </NextUIProvider>
  );
};

export default App;
