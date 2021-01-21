import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
import { ADD, DELETE, CHANGE_FILTER } from './contacts-types';

export const addContact = createAction(ADD, (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
export const deleteContact = createAction(DELETE);

export const changeFilter = createAction(CHANGE_FILTER);

export default { addContact, deleteContact, changeFilter };
