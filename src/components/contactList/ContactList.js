import T from 'prop-types';
import '../contactList/ContactList.css';
import { connect } from 'react-redux'
import contactActions from "../../redux/contacts/contacts-actions"

function ContactList({ contacts, onDeleteContact }) {
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

ContactList.propTypes = {
  contacts: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string.isRequired,
      number: T.string.isRequired,
    }),
  ),
  onDeleteContact: T.func.isRequired,
};


const getContacts = (contacts, filter) => {

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};


const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
  contacts: getContacts(contacts, filter)


});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactActions.deleteContact(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
