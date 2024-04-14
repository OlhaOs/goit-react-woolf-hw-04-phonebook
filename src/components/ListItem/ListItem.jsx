import css from './ListItem.module.css';
const ListItem = ({ contact, onDelete }) => {
  return (
    <li className={css.listItem}>
      {contact.name}: {contact.number}
      <button
        type="button"
        onClick={() => onDelete(contact.id)}
        className={css.deleteBtn}
      >
        Delete
      </button>
    </li>
  );
};
export default ListItem;
