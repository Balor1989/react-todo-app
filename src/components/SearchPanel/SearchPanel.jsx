import s from './SearchPanel.module.css';

const SearchPanel = () => {
  return <input className={`form-control ${s.searchInput}`} type="text" placeholder="search" />;
};

export default SearchPanel;
