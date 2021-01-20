import T from 'prop-types';
import '../Filter/Filter.css';
import { connect } from 'react-redux';
import contactActions from "../../redux/contacts/contacts-actions"

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

const mapStateToProps = state => (
  {
    value: state.contacts.filter,
  });

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactActions.changeFilter(e.currentTarget.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);