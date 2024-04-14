import css from './ContactList.module.css';
import ListItem from 'components/ListItem/ListItem';

const ContactList = ({ contacts, onDeleteBtn }) => {
  return (
    <>
      <ul className={css.contactList}>
        {contacts.map(contact => {
          return (
            <ListItem
              key={contact.id}
              contact={contact}
              onDelete={onDeleteBtn}
            />
          );
        })}
      </ul>
    </>
  );
};
export default ContactList;
