import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/contactSlice';
import { Contact } from '../lib/types';
interface ContactInfo{
  setCurrentView: React.Dispatch<React.SetStateAction<string>>

}
const AddCustomerPage: React.FC<ContactInfo> = ({setCurrentView}) => {
 
  const dispatch = useDispatch();
 

  const [form, setForm] = useState({
    name:"",
    email:'',
    phoneNumber: "",
    
    status:""
  })
// handle the form data
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = Date.now();
    const newContact:Contact = {
       ...form,// Add the message to the new contact object
      id 
    };

    dispatch(addContact(newContact));

    // Reset form fields after submission
    setForm({
      name: '',
      email: '',
      phoneNumber: '',
      status: ''
    });
    // take to list of contacts page
    setCurrentView("list")
  };

  return (
    <div className="flex items-center  min-h-[80vh] w-[100%] justify-center  ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 max-md:p-1 rounded shadow-md space-y-4 w-[60%] max-md:w-full"
      >
        {/* enter the name */}
           <label className="block text-sm font-medium text-gray-800">
            Name:
          </label>
          <input
            className="mt-1 p-2 border rounded w-full"
             placeholder="Name"   value={form.name}
             onChange={(e)=> setForm({...form,name:e.target.value})}
          />
          
 {/* enter the email */}
           <label className="block text-sm font-medium text-gray-800">
            Email:
          </label>
          <input
            className="mt-1 p-2 border rounded w-full"
             placeholder="email"   value={form.email}
             onChange={(e)=> setForm({...form,email:e.target.value})}
          />
    {/* enter the phone number */}
  <label className="block text-sm font-medium text-gray-800">
            Phone Number:
          </label>
          <input
            className="mt-1 p-2 border rounded w-full"
             placeholder="phoneNumber"   value={form.phoneNumber}
          onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
          />
       
{/* status active or inactive */}
       <label className="block text-sm font-medium text-gray-800">
          Status:
        </label>
        <div className="flex space-x-4 justify-start">
  <label>
    <input
      type="radio"
      name="status"
      value="Active"
      checked={form.status === "Active"}
      onChange={(e) =>
        setForm({ ...form, status: e.target.value })
      }
    />
    Active
  </label>
  <label>
    <input
      type="radio"
      name="status"
      value="Inactive"
      checked={form.status === "Inactive"}
      onChange={(e) =>
        setForm({ ...form, status: e.target.value })
      }
    />
    Inactive
  </label>
</div>
{/* add the contact to the list */}
        <button type="submit" className="px-5 py-1 w-full text-white bg-black"  >
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default AddCustomerPage;






 