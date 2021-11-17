// import React from 'react'

// export default function Navbar() {
//     return (
//         <div>
            
//         </div>
//     )
// }


import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Examples</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;
