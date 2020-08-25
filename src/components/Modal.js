// import React, { Component } from 'react'
// import './Modal.css';

// export default class Modal extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             user : props.user
//         }
//     }
//     render() {
//         return (
//             <div className='modal-container'>
//             <div className='modal-header'>
//                 <div>Hi, George </div>
//                 <p>x</p>
//             </div>
//             <div className="modal-content">
//                 <div className="modal-body">
//                     <img src="https://images.unsplash.com/photo-1555797487-a1f30b5d8d55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
//                     <h3>User Details</h3>
//                     <div>User Id : {this.props.user.id} </div>
//                     <div>Full Name : </div>
//                     <div>Email : </div>
//                 </div>
//                 <div className="modal-footer">
//                     <button className="btn-close">Close</button>
//                 </div>
//             </div>
//         </div>
//         )
//     }
// }

import React from 'react';
import './Modal.css'

export default function Modal(props) {
    return (
        <div className='modal-container'>
        <div className='modal-header'>
            <div>Hi, {props.user.first_name} </div>
            <p onClick={props.close}>x</p>
        </div>
        <div className="modal-content">
            <div className="modal-body">
                <img src={props.user.avatar} alt={props.user.avatar} />
                <h3>User Details</h3>
                <div>User Id : {props.user.id} </div>
                <div>Full Name : {props.user.first_name} {props.user.last_name}</div>
                <div>Email : {props.user.email}</div>
            </div>
            <div className="modal-footer">
                <button onClick={props.close} className="btn-close">Close</button>
            </div>
        </div>
    </div>
    )
}
