import React, { useState } from "react";
import { Contact } from "../lib/types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../store/contactSlice";
import EditContact from "./EditContact";

interface ContactDetailsProps {
  contact: Contact;
}
const ContactDetails: React.FC<ContactDetailsProps> = ({ contact }) => {
  const [isOpen, setIsOpen] = useState(false);

  //update the contacts details
  const dispatch = useDispatch();

  // const [form, setForm] = useState(contact);
  // console.log("form outside update", form);
  // const handleUpdate = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("this is form in update", form);
  //   const newContact: Contact = {
  //     ...form, // edit the message to the new contact object
  //   };
  //   console.log(newContact);
  //   dispatch(editContact(newContact));

   
 
  //   setIsOpen((prev) => !prev);
  // };

  //delete the contact details

  const handleDelete = (id: number) => {
    console.log(id);
    dispatch(deleteContact(id));
  };

  // toggle the dialog box for edit contact details

  const toggleModal = () => {
    setIsOpen(!isOpen); // Toggle modal visibility
  };
  return (
    <div className=" p-2 px-4 min-w-[15rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {contact.name}
        </h5>
      </a>
      <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
        {contact.email}
      </p>
      <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
        {contact.phoneNumber}
      </p>
      <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
        {contact.status}
      </p>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => handleDelete(contact.id)}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          delete
        </button>
        {/* Modal toggle */}
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className="focus:outline-none text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={toggleModal}
        >
          view
        </button>
        <div className="relative">
          
        {/* Main modal */}
        {
          isOpen &&

        <EditContact contact={contact} setIsOpen={setIsOpen} />
        }
      </div>
      </div>
    </div>
  );
};
        
export default ContactDetails;
