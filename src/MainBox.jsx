import React, { Component } from 'react';
import { Col, Jumbotron, Button, NavItem, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import aja from 'aja';

class MainBox extends Component{
    
    constructor(){
        super()
        this.state={
            name:'',
            text:''
        }
    }
    
    handleNameChange(e){ // e for event because everytime a change happens, an event object will be there
        console.log(e.target.value)
        this.setState({name:e.target.value})
    }
    
    handleTextChange(e){
        console.log(e.target.value)
        this.setState({text:e.target.value})
    }
    
    submitConfession(){
        console.log("submitting...")
        var name=this.state.name;
        var text=this.state.text;
        var _this=this; // 
        
        
        if (name == '' || text == ''){
            alert("yo type name and text");
            return; // return "Something here!"
        }
        
        
        aja()
          .method('POST')
          .url('http://localhost:8080/confession')
          .data({name: name, text: text})
          .on('success', function(response){
             
            _this.setState({name:'', text: ''});
            alert("successfully stored confession! name:" + name + ", text: " + text)
        })
        .go();
    }
    
    render(){
        return(
            <div style={{marginTop: "70px"}}>
                <Col xs={8} xsOffset={2}>
                    <img style={{width: "100%"}} src="http://i.imgur.com/akmqbFF.png" />
                </Col>  
                
                
                
                <Col xs={8} xsOffset={2} style={{marginTop: "20px"}}>
                    <Jumbotron style= {{padding: "10px"}}>
                    <h4>Enter a cool name!</h4>
                        <FormGroup 
                            validationState={this.state.name.length <= 1 ? 'error' : 'success'}
                            controlId="formControlsTextarea">
                            <FormControl 
                                value={this.state.name} //state: everytime state is being changed, the value inside changes too
                                onChange={this.handleNameChange.bind(this)}
                                placeholder="Enter a name!" rows={1}/>
                        </FormGroup>
                        <h4>Confess here!</h4>
                        <FormGroup 
                            validationState={this.state.text.length <= 1 ? 'error' : 'success'}
                            controlId="formControlsTextarea">
                          <FormControl 
                            value={this.state.text}
                            onChange={this.handleTextChange.bind(this)}
                            placeholder="or tell me a lame joke" rows={15}/>
                        </FormGroup>
                        
                        
                        
                        <Button onClick={this.submitConfession.bind(this)} bsStyle="info" bsSize="large" block>Submit your confessions!</Button>
                    </Jumbotron>
                </Col>
                
                
            </div>
            
                
                  
            
        );
    }
}

export default MainBox