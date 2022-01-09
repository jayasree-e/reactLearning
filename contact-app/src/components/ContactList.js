import React from 'react';
import ContactCard from './ContactCard';

//Functional Component
const ContactList = (props) => {
    console.log(props);
    // Accessing props
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard >
        );
    })
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
}
export default ContactList;