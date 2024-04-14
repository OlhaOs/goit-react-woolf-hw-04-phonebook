import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContactBtn = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  componentDidMount = () => {
    const localData = localStorage.getItem('contact');
    if (localData && JSON.parse(localData).length > 0) {
      this.setState({
        contacts: JSON.parse(localData),
      });
    }
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  checkContact = newContact => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.handleAddContactBtn(newContact);
  };

  handleDeleteContactBtn = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filtredData = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <div className={css.mainContainer}>
          <h1>Phonebook</h1>
          <ContactForm handleAddContactBtn={this.checkContact} />
          <Filter filter={filter} onSearch={this.handleFilterChange} />{' '}
          <h2>Contacts</h2>
          <ContactList
            contacts={filtredData}
            onDeleteBtn={this.handleDeleteContactBtn}
          />
        </div>
      </>
    );
  }
}
