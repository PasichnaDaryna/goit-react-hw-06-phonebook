import './App.css';
import { Component } from 'react';
// import shortid from 'shortid';
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter.js';
import ContactList from './components/contactList/ContactList';

// /\old code 

class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // addContact = ({ name, number }) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   const { contacts } = this.state;

  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase(),
  //     )
  //   ) {
  //     alert(`${name} is already in use`);
  //   } else if (contacts.find(contact => contact.number === number)) {
  //     alert(`${number} is already in use`);
  //   } else if (name.trim() === '' || number.trim() === '') {
  //     alert("Enter the contact's name and phone number!");
  //   } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
  //     alert('Enter the correct phone number');
  //   } else {
  //     this.setState(({ contacts }) => ({
  //       contacts: [contact, ...contacts],
  //     }));
  //   }
  // };

  // deleteContact = contactId => {
  //   this.setState(({ contacts }) => ({
  //     contacts: contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  render() {
    // const { filter, contacts } = this.state;
    // const visibleContacts = this.getContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        {/* {contacts.length > 1 && (
          <Filter value={filter} onChange={this.changeFilter} />
        )} */}

        <Filter />
        {/* {contacts.length > 0 ? (
          <ContactList

          />
        ) : (
            <p>Your phonebook is empty. Please add contact.</p>
          )} */}


        {/* new list */}
        <ContactList

        />
      </Container>
    );
  }
}

export default App;
