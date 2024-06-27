// import React, { Component } from 'react';
// import loading from './loading.gif';

// export default class Spinner extends Component {
//   render() {
//     return (
//       <div className='text-center'>
//         <img src={loading} alt="Loding Spinner" />
//       </div>
//     )
//   }
// }

// "react": "^18.2.0",
// "react-dom": "^18.2.0",
// "react-router-dom": "^6.21.2",
// "react-scripts": "5.0.1",
// "web-vitals": "^2.1.4"





// "react-top-loading-bar": "^2.0.1",


import React from 'react'
import loading from './loading.gif'

const Spinner = ()=> {
        return (
            <div className="text-center">
                <img className="my-3" src={loading} alt="loading" />
            </div>
        )
}

export default Spinner
