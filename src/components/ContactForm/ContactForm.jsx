import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const defaultState = {
  name: '',
  number: '',
};

export const ContactForm = ({ handleAddContactBtn }) => {
  const [state, setState] = useState(defaultState);

  const handleChange = ({ target: { value, name } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    handleAddContactBtn({ ...state, id });
    resetForm();
  };

  const resetForm = () => {
    setState({ name: '', number: '' });
  };

  return (
    <>
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={state.name}
          onChange={handleChange}
          className={css.nameInput}
        />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={state.number}
          onChange={handleChange}
          className={css.numberInput}
        />
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </>
  );
};
