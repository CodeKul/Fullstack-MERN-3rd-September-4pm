import React, { useState } from 'react'

function FunctionComponents() {

    

    const [count, setCount] = useState(0);
    const [city, setCity] = useState("pune")

    console.log("count" + count)
    console.log(city)

    const Increment = () => {
        setCount(count + 1)
    }

    const Decrement = () => {
        setCount(count - 1)
    }

    //setCity("mumbai")


    return (
      
        <div>
  {console.log(count)}
            <h1>
                Functional Component
            </h1>

            <h5>{count}</h5>

            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}

export default FunctionComponents;
