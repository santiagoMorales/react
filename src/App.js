import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Nav from "./Components/NavBar"
import Form from './pages/Form'
import {Animated} from "react-animated-css";



class App extends Component {
  
  render() {
    return (
      <div>
       <Form></Form>
      </div>
    );
  }
}
export default App;