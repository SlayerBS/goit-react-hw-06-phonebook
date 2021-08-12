import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("add", (data) => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));

const deleteContact = createAction("delete");

const changeFilter = createAction("changeFilter");

export default { addContact, changeFilter, deleteContact };
