import types from "./types";
import { v4 as uuidv4 } from "uuid";

const addContact = (data) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
});

const deleteContact = (id) => ({
  type: types.DELETE,
  payload: id,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

const getContacts = (value) => ({
  type: types.GET,
  payload: value,
});

export default { addContact, changeFilter, deleteContact, getContacts };
