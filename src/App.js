import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import { BrowserRouter } from 'react-router-dom'
import Nav from "./Components/NavBar"
import Form from './pages/Form'


class App extends Component {
     
  render() {
    return (
      <div>
        <BrowserRouter>
          <div >
            <Nav />            
          </div>
          <div >
            <br/>
            <br/>
            <br/>
            <Form/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;