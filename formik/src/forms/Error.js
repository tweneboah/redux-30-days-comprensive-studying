import React, { Component } from 'react';

class Error extends Component {
    state = {  }
    render() { 
        return (  
            <div style={{color: 'red'}}>
                {this.props.children}
            </div>
        );
    }
}
 
export default Error;