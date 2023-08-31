import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';


const App = () => {
  const [currentView, setCurrentView] = useState('list'); // 'list', 'form', 'details'
  const [selectedContact, setSelectedContact] = useState(null);
  
  const handleViewChange = (view: React.SetStateAction<string>, contact = null) => {
    setCurrentView(view);
    setSelectedContact(contact);
  };
 

  return (
    <div className="">
      <div className="flex justify-start gap-3 w-full ">
   
      </div>
      <div className="w-full min-h[100vh] flex flex-col justify-center items-center">
      {currentView === "list" ?
          
          <button className="px-3 py-2 bg-gray-900  text-white  " onClick={() => handleViewChange('form')}>Create Contact</button>
  :  <button className="px-3 py-2 bg-gray-900  text-white  " onClick={() => handleViewChange('list')}>View List</button>
        }
         
      {currentView === 'list' && <ContactList contacts={[]}  />}
      {/* {currentView === 'list' && <ContactList contacts={contacts} />} */}
          {currentView === 'form' && <ContactForm setCurrentView={setCurrentView} />}
  {currentView === 'details' && selectedContact && <ContactDetails contact={selectedContact} />}
       
      </div>
    </div>
  );
};

export default App;
