// import T from 'prop-types';
import '../Filter/Filter.css';
// import { connect } from 'react-redux';
import contactActions from "../../redux/contacts/contacts-actions"
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors'

// const Filter = ({ value, onChange }) => {
//   return (
//     <label>
//       Find contacts by name
//       <input type="text" value={value} onChange={onChange} />
//     </label>
//   );
// };


const Filter = () => {
  const value = useSelector(getFilter)
  const dispatch = useDispatch()

  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={e => dispatch(contactActions.changeFilter(e.currentTarget.value))} />
    </label>
  );
}

// const mapStateToProps = state => (
//   {
//     value: state.contacts.filter,
//   });



export default Filter;