import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addContact } from '../../redux/contacts/contacts-actions';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../Form/Form.css';

function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const checkRepeatName = name => {
    return contacts.find(
      contact =>
        contact &&
        contact.toLowerCase &&
        contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const checkRepeatNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const checkEmptyQuery = (name, number) => {
    return name.trim() === '' || number.trim() === '';
  };

  const checkValidNumber = number => {
    return !/\d{3}[-]\d{2}[-]\d{2}/g.test(number);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (checkRepeatName(name)) {
      toast(`'${name}' is already in use!`);
    } else if (checkRepeatNumber(number)) {
      toast(`🤔 ${number} is already in use`);
    } else if (checkEmptyQuery(name, number)) {
      toast.info(' Enter the correct name and number!');
    } else if (checkValidNumber(number)) {
      toast.error('# Enter the correct phone number!');
    } else {
      dispatch(addContact(name, number));
    }
    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <form id="contact" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className="input-field"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="John Dows"
        />
      </label>
      <br />
      <label>
        Phone number
        <input
          className="input-field"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="459-12-56"
        />
      </label>

      <button type="submit" className="submit-button">
        Add contact
      </button>
    </form>
  );
}

export default Form;
