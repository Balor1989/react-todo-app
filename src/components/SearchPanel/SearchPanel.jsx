import s from './SearchPanel.module.css';

const SearchPanel = ({ onSearchTask }) => {
  return (
    <input
      className={`form-control ${s.searchInput}`}
      type="text"
      placeholder="search"
      onChange={onSearchTask}
    />
  );
};

export default SearchPanel;
