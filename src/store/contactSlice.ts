// contactSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact,ContactState } from '../lib/types';
 

 

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { id, name, email,phoneNumber,status } = action.payload;
      const contactIndex = state.contacts.findIndex((contact) => contact.id === id);
      if (contactIndex !== -1) {
        state.contacts[contactIndex] = { ...state.contacts[contactIndex], name, email,phoneNumber,status};
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== Number(action.payload));
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
