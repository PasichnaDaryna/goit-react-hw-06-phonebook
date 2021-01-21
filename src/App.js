import './App.css';

import { Component } from 'react';
// import shortid from 'shortid';
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter.js';
import ContactList from './components/contactList/ContactList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <ToastContainer autoClose={5000} />
      </Container>
    );
  }
}

export default App;
