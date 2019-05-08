import React from 'react';

import './AddPerson.css';

class AddPerson extends React.Component {
    state = { 
        name: '',
        age: ''
     }

     nameChangeHandler = (event) => {
         this.setState({age:event.target.value})
     }

     ageChangeHandler = (event) => {
         this.setState({age: event.target.value})
     }
    render() { 
        return ( 
            <div className="AddPerson">
            <input 
           
            onChange={this.nameChangeHandler}
            value={this.state.name}
            type='text' placeholder='name'
            />
            <input 
            onChange={this.ageChangeHandler}
            value={this.state.age}
            type='number' placeholder='age'
            />
                <button onClick={()=>this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
         );
    }
}
 
export default AddPerson;



