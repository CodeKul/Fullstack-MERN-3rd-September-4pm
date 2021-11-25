import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(){
        super()
        this.state = {counter: 0}
    }


  componentDidMount(){
      console.log("Component Mounted")
  }

  shouldComponentUpdate(){
      return true;
  }

  componentDidUpdate(){
      console.log("component did updated")
  }

    render() {
        console.log("Mounting Component")
        return (
            <div>
                <h1>{this.state.counter}</h1>

                <button onClick={()=>{this.setState({counter: this.state.counter+1})}}>Increment</button>
                <button onClick={()=>{this.setState({counter: this.state.counter-1})}}>Decrement</button>
            </div>
        )
    }
}
