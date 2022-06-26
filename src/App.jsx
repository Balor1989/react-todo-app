import AppFooter from './components/AppFooter/AppFooter';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import TodoList from './components/TodoList/TodoList';
import s from './App.module.css';

const App = () => {
  const todos = [
    { id: 'id-1', task: 'Learn React' },
    { id: 'id-2', task: 'Learn Vue' },
    { id: 'id-3', task: 'Learn JavaScript' },
    { id: 'id-4', task: 'Learn TypeScript' },
  ];

  return (
    <div className={s.todoApp}>
      <AppHeader todo={1} done={3} />
      <main>
        <div className={`d-flex ${s.topPanel}`}>
          <SearchPanel />
        </div>
        <TodoList todos={todos} />
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
