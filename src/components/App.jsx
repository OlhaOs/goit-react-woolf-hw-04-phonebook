import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem('contact');
    return localData ? JSON.parse(localData) : [];
  });

  const [filter, setFilter] = useState('');

  const handleAddContactBtn = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContactBtn = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const checkContact = newContact => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    handleAddContactBtn(newContact);
  };

  const filtredData = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className={css.mainContainer}>
        <h1>Phonebook</h1>
        <ContactForm handleAddContactBtn={checkContact} />
        <Filter filter={filter} onSearch={handleFilterChange} />
        <h2>Contacts</h2>
        <ContactList
          contacts={filtredData}
          onDeleteBtn={handleDeleteContactBtn}
        />
      </div>
    </>
  );
};
