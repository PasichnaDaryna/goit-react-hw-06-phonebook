
import '../contactList/ContactList.css';
import { getAllContacts } from '../../redux/contacts/contacts-selectors'

import contactActions from "../../redux/contacts/contacts-actions"
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {

  const contacts = useSelector(getAllContacts)
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