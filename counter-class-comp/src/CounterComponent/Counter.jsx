import './Counter.css';
import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }
    render(){
        const {counter}  = this.state;
  return (
    <div className='count'>
        <h1>Counter App</h1>
        <p>Count: {counter}</p>
        <button onClick={()=>this.setState({counter:counter+1})}>Increment</button>
        <button onClick={()=>this.setState({counter:counter-1})}>Decrement</button>
    </div>
  )
}
}

export default Counter;
