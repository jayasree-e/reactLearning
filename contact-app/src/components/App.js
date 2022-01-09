import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
// import { uuid } from 'uuidv4';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import './App.css';

function App() {
  const LOCAL_STORGE_KEY = "contacts";
  //useState - hook
  const [contacts, setContacts] = useState([]);

  //Rendering List in React
  // const contacts = [
  //   {
  //     id: 1,
  //     name: "sample",
  //     email: "sample@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     name: "test",
  //     email: "test@gmail.com",
  //   }
  // ]
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      {/* Function as Prop */}
      <AddContact addContactHandler={addContactHandler} />
      {/* Props-pass data from parent to child */}
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
