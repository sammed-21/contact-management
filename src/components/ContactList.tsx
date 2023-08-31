import React from "react";
import { Contact } from "../lib/types";
import ContactDetails from "./ContactDetails";
import   { RootState } from '../store/store';
import { useSelector } from "react-redux";
 

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = () => {
  // get the all the contact store in the redux
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <div className="flex flex-col justify-start  flex-wrap h-[80vh]">
      <h1 className="font-bold capitalize items-center w-full text-xl py-3">contact list</h1>
      <div className="flex flex-wrap w-full">
{/* check if the any contact is there in the store to list it */}
      {contacts.length <= 0 ?  (
        <div className="flex ">
         <h2>No contacts found. Please add contacts using the Create Contact form.</h2>
    </div>
  ):(
            <ul className="flex gap-3 flex-wrap">
              {/* component to list the all the details */}
      {contacts.map((contact:Contact) => (
        <li className="" key={contact.id}>
          <div>
          
           
            <ContactDetails contact={contact}/>
          </div>
        </li>
      ))}
    </ul>
  ) }
  </div>
    </div>
  );
};

export default ContactList;
