import React from 'react';
// Importing images
import user from '../images/user.png';
import './ContactCard.css';
const ContactCard = (props) => {
    //Destructuring
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">
                    {props.contact.name}
                </div>
                <div>{props.contact.email}</div>
            </div>
            {/* Inline Styles */}
            <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }}
                onClick={() => props.clickHandler(id)}></i>
        </div >
    );
}
export default ContactCard;