import types from "./types";
import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction(types.ADD, (data) => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));

const deleteContact = createAction(types.DELETE);

const changeFilter = createAction(types.CHANGE_FILTER);

export default { addContact, changeFilter, deleteContact };
