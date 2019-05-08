import React, { Component } from 'react';
import {connect } from 'react-redux'
import increamentAction from '../actions/incrementAction';
import decrementByAction from '../actions/decrementAction';
import increaseBy5 from '../actions/increaseBy5';
import onStoreResults from '../actions/onStoreResults';
import onDeleteResult from '../actions/onDeleteResult'

class Counter extends Component {
 
    render() { 
        console.log('From Count Props', this.props)
        return ( 
            <div>
                <h1>Counter App</h1>
                <h2>TRANSACTIONS STATISTICS</h2>
                <hr/>
                <h2>Total Count =    <span class="badge badge-secondary">{this.props.ctr.counter} </span></h2>
                <p>Decrement History Count: {this.props.ctr.decrementHistory.length}</p>

                <p>Increase History Count: {this.props.ctr.increamentHistory.length}</p>

                <p>Increase by 5 History Count: {this.props.ctr.increaeByFiveHistory.length}</p>

                <hr/>
               
                <button className='btn btn-primary' onClick={()=>this.props.increamentAction(1)}>Increase</button>

                <button className='btn btn-danger m-2' onClick={()=>this.props.decrementByAction(1)}>Decrement</button>



                <button  className='btn btn-success'onClick={()=>this.props.increaseBy5(5)}>Add 5</button>
                <hr>
                </hr>
                <button className='btn btn-warning' onClick={this.props.onStoreResults}>Store Results</button>
                  <h1>History transactions track</h1>
                <ul className="list-group">
                <p>The current state of the store is</p>
                    {this.props.ctr.results.map((item) => {
                        return <li className="list-group-item" onClick={this.props.onDeleteResult}>{item}</li>
                    })}
                    
                </ul>
                <h3>Increment History</h3>
                <ul className="list-group">
                    {this.props.ctr.increamentHistory.map((increment) => {
                        return <li className="list-group-item">{increment}</li>
                    })}
                </ul>

                <h3>Decrement History</h3>

                
                <ul className="list-group">
                    {this.props.ctr.decrementHistory.map((decrement) => {
                        return <li className="list-group-item">{decrement}</li>
                    })}
                   
                </ul>

                <h3>Increase By 5 History</h3>
                <ul className="list-group">
                    {this.props.ctr.increaeByFiveHistory.map((increment) => {
                        return <li className="list-group-item">{increment}</li>
                    })}
                </ul>

               
            </div>
            
         );
    }
}
 
const mapStateToProps = (state) => {
    console.log(state)
    return {
        ctr: state.counter
        
    }
}
export default connect(mapStateToProps, {decrementByAction,increamentAction, increaseBy5, onStoreResults, onDeleteResult}) (Counter);