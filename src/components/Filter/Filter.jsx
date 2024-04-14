import css from './Filter.module.css';

const Filter = ({ filter, onSearch }) => {
  return (
    <>
      <div className={css.searchField}>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          name="filter"
          value={filter}
          onChange={onSearch}
          className={css.filterInput}
        />
      </div>
    </>
  );
};

export default Filter;
