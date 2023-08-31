import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/contactSlice';
import { Contact } from '../lib/types';
interface ContactInfo{
  setCurrentView: React.Dispatch<React.SetStateAction<string>>

}
const AddCustomerPage: React.FC<ContactInfo> = ({setCurrentView}) => {
 
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [status,setStatus] = useState('');

  const [form, setForm] = useState({
    name:"",
    email:'',
    phoneNumber: "",
    
    status:""
  })

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
    setCurrentView("list")
  };

  return (
    <div className="flex items-center  min-h-[80vh] w-[100%] justify-center  ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 max-md:p-1 rounded shadow-md space-y-4 w-[60%] max-md:w-full"
      >
           <label className="block text-sm font-medium text-gray-800">
            Name:
          </label>
          <input
            className="mt-1 p-2 border rounded w-full"
             placeholder="Name"   value={form.name}
             onChange={(e)=> setForm({...form,name:e.target.value})}
          />
          
 
           <label className="block text-sm font-medium text-gray-800">
            Email:
          </label>
          <input
            className="mt-1 p-2 border rounded w-full"
             placeholder="email"   value={form.email}
             onChange={(e)=> setForm({...form,email:e.target.value})}
          />
    
  <label className="block text-sm font-medium text-gray-800">
            Phone Number:
          </label>
          <input
            className="mt-1 p-2 border rounded w-full"
             placeholder="phoneNumber"   value={form.phoneNumber}
          onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
          />
       

       <label className="block text-sm font-medium text-gray-800">
          Status:
        </label>
        <div>
          <label>
            <input
              type="radio"
              value="active"
              checked={form.status === 'active'}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              value="inactive"
              checked={form.status === 'inactive'}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            />
            Inactive
          </label>
        </div>

        <button type="submit" className="px-5 py-1 w-full text-white bg-black"  >
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default AddCustomerPage;






 