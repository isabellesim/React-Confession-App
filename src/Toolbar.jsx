import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';



class Toolbar extends Component {
    
    handleRefreshClick(){
        var event = new Event("onRefreshConfessions");
        document.dispatchEvent(event);
    }
    
    render(){
        return(
          
            <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">ECA Confessions</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href = "#">
                            <Button onClick={this.handleRefreshClick.bind(this)} bsStyle="info" bsSize = "xsmall">Refresh</Button>
                        </NavItem>
                    </Nav>
            </Navbar>
            
            
        );
        
    }
}

export default Toolbar;