import React from 'react';
import  {withRouter}  from 'react-router-dom'
import { Button, Navbar, Nav,Form,FormControl, NavDropdown} from 'react-bootstrap';

class NavBar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    navLink (){
           return <React.Fragment>
             <Nav.Item>
              <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pto">Otrp var</Nav.Link>
            </React.Fragment>
              
    }
    render() {
        return (
                    
             <Navbar fixed="top"
              collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
             <Nav variant="pills" defaultActiveKey="/home" className="mr-auto">
             {this.navLink()}
              <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                    Something else here
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        
        )
    }
};
NavBar = withRouter(NavBar);
export default NavBar;