import React from 'react'
import { Button,Form, Container, Row, Col} from 'react-bootstrap';
import '../Form.css';
import Agregar from './agregar'
import {Animated} from "react-animated-css";

class FormMail extends React.Component{
    constructor(args){
        super(args)
        
        this.state={
            users: [
            ]
        }
      }     
      
    add(e){
        const emailInput = document.getElementById('email')
        const passwordInput = document.getElementById('pwd')    
      
        let newUser ={
          id: new Date().getTime(),
          email: emailInput.value,
          pwd: passwordInput.value
        }
        let users = this.state.users
        users.unshift(newUser)
        
       
        this.setState({
          users: users
        })
      } 

      delete(e){

      }
    render(){
        return ( 
        <div>    
           <Container>
            <Row>
                <p>      

                </p>
            </Row>
                <Row>
                  <Col sm></Col>
                  <Col sm>
                  <Animated animationIn ="zoomIn" isVisible={true}>
                    <Form className ="fadeInDown ">
                       <Container  className='ok rounded-lg p-4' >
                          <Row>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" id='email' required/>
                                <Form.Text className="text-white bg-dark">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                          </Row>
                        <Row>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="Password" id='pwd' required/>
                            </Form.Group>
                        </Row>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                    
                         <Button variant="outline-dark" type="submit" 
                         onClick={this.add.bind(this)}>
                                 Submit
                         </Button>
                        
                        </Container>
                    </Form> 
                    </Animated>
                 </Col>
                    <Col sm>
                    <ul>
                        {
                            this.state.users.map(
                             user =>{
                            return <Agregar 
                                id ={user.id}
                                email={user.email}
                                pwd={user.pwd}
                                deleteOp={this.delete.bind(this)}

                            />
                            })
                            
                        }
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <div>
                <h3>Prueba animacion</h3>
            </div>
            </Animated>
         </div>  
           
        )
    }
}
export default FormMail