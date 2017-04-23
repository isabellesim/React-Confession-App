import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';
import aja from 'aja';
import moment from 'moment';


class MessageBoard extends Component{
    
    
    constructor(){
        super();
        this.state={
            confessionData: [] // empty array because no items loaded yet --> load with nothing on the screen first
        };
    }
    
    refreshConfessions(){
        var _this= this;
        aja()
          .method('GET')
          .url('http://localhost:8080/confession/all')
          .on('success', function(response){
            _this.setState({confessionData: response.data}); // only set the state when it has finished loading 
        })
        .go();
    }
    
    
    componentDidMount(){
        var _this=this;
        this.refreshConfessions(); // start listening when the message board is loaded and appears --> doesn't make sense to listen if the message board isn't there yet
        document.addEventListener("onRefreshConfessions", function(){
            _this.refreshConfessions();     // this refers to the function
        });
    }
    
    render(){
        return(
            <div>
                <Col xs={8} xsOffset={2}>
                    <h4>Past Confessions</h4>
                </Col>
                
                        {this.state.confessionData.map(function(confession){ // for each confession object you will print out one thingy
                            return(
                                                
                                <Col xs={8} xsOffset={2}>
                                    <Panel footer>
                                        <h5>Confession ID: havrqwojbvalhejbkj </h5>
                                        <hr />
                                        
                                        <h4>Text: {confession.text}</h4>
                                        <a href="#">Published by {confession.name}</a>
                                        <a> on {moment(confession.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</a>
                                        
                                        
                                        <hr />
                                        
                                    </Panel>
                                </Col>
                            )    
                        })}
            
            </div>
        );
    }
}

export default MessageBoard