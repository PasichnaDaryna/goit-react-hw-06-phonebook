
import '../contactList/ContactList.css';

import contactActions from "../../redux/contacts/contacts-actions"
import { useSelector, useDispatch } from 'react-redux';



const getContacts = (contacts, filter) => {

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};


const ContactList = () => {
  const contacts = useSelector(state =>
    getContacts(state.contacts.contacts, state.contacts.filter));
  const dispatch = useDispatch();


  const onDeleteContact = id => dispatch(contactActions.deleteContact(id));

  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}





export default ContactList;