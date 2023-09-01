import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
 


const App = () => {
  const [currentView, setCurrentView] = useState('list'); // 'list', 'form', 'details'
   
  // this page help in switch the component according to the condition
  const handleViewChange = (view: React.SetStateAction<string>) => {
    setCurrentView(view);
 
  };
 

  return (
    <div className="">
      <div className="flex justify-start gap-3 w-full ">
   
      </div>
      <div className="w-full min-h[100vh] flex flex-col justify-center items-center md:items-start ease-in ">
      {currentView === "list" ?
          
          <button className="px-3 py-2 bg-gray-900  text-white  " onClick={() => handleViewChange('form')}>Create Contact</button>
  :  <button className="px-3 py-2 bg-gray-900  text-white  " onClick={() => handleViewChange('list')}>View List</button>
        }
         
      {currentView === 'list' && <ContactList contacts={[]}  />}
      
          {currentView === 'form' && <ContactForm setCurrentView={setCurrentView} />}
  {/* {currentView === 'details' && selectedContact && <ContactDetails contact={selectedContact} />} */}
       
      </div>
    </div>
  );
};

export default App;
