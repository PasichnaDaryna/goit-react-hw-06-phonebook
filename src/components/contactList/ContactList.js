import '../contactList/ContactList.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import {
  getVisibleContacts,
  getContacts,
} from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  const contacts = useSelector(getContacts);

  return (
    <ul className="contact-list">
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            <b>{name} </b>
            <em>{number}</em>
          </p>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
