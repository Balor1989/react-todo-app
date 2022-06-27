import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import StatusFilter from './components/StatusFilter';
import TodoList from './components/TodoList';
import s from './App.module.css';
import { Component } from 'react';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', task: 'Learn React' },
      { id: 'id-2', task: 'Learn Vue' },
      { id: 'id-3', task: 'Learn JavaScript', important: true },
      { id: 'id-4', task: 'Learn TypeScript' },
    ],
  };
  deleteContactCard = cardId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== cardId),
    }));
  };
  deleteItem = id => {
    this.setState(prevState => ({ todos: prevState.todos.filter(task => task.id !== id) }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div className={s.todoApp}>
        <AppHeader todo={1} done={3} />
        <main>
          <div className={`d-flex ${s.topPanel}`}>
            <SearchPanel />
            <StatusFilter />
          </div>
          <TodoList todos={todos} onDeleted={this.deleteItem} />
        </main>
        <AppFooter />
      </div>
    );
  }
}

export default App;
