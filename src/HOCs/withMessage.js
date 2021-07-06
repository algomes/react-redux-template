import React, { Component } from 'react';


//Class Based
//Class based HOC
// function myHOC(CrudeComponent) {
//     return class extends Component {
//         render() {
//            return <div>
//                <h1>Inner</h1>
//                 <CrudeComponent/>
//            </div> 
//         }
//     }
// }

/**
 * 
 * @param SimplifiedFunc
    const withMessage = (Component, message) => ({ ...props }) => (
        <div>
            <h1>{message}</h1>
            <WrappedComponent {...props} />
        </div>
    )
 * @param Usage export default withMessage(App, "This is the message I want");

 */
const withMessage = (Component, message) => {
    return props => (
        <div>
            <h1>{message}</h1>
            <Component {...props} />
        </div>
    );
} 

export default withMessage;
