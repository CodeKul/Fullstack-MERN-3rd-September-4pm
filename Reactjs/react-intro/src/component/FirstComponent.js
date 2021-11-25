import React, { Component } from 'react'

export default class FirstComponent extends Component {

    componentDidMount(){
        console.log("Component Mounted")
    }

    constructor(){
        this.state()
    }

    render() {
        console.log("Component Mounting")
        return (
            <div>
                <h1>Class Component</h1>
            </div>
        )
    }
}
