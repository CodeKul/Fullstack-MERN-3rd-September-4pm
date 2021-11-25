import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent({city}) {
    return (
        <div>
            <h1> Name: {city} </h1>

            <ChildComponent city={"DElhi"}/>
        </div>
    )
}
