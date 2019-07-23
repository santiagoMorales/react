import React, { Component } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Nav from "./Components/NavBar"
import Form from './pages/Form'
import {Animated} from "react-animated-css";
import Home from "./pages/Home"
import About from "./pages/About"

class App extends Component {
  
  render() {
    return (
      <div>
        <BrowserRouter>
        <header role="banner">
        <Animated animationIn ="fadeInRight" isVisible={true}>
          <Nav/>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/nosotros" component={About}/>
          </Switch>
          </Animated>
        </header>
      </BrowserRouter>
     
      
      </div>
    );
  }
}
export default App;