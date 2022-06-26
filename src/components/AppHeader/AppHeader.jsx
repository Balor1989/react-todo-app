import s from './AppHeader.module.css';

const AppHeader = ({ todo, done }) => {
  return (
    <header className={`d-flex ${s.appHeader}`}>
      <h1>Todo List</h1>
      <h2>
        {todo} more to do, {done} done
      </h2>
    </header>
  );
};

export default AppHeader;
