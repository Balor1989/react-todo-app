import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import StatusFilter from './components/StatusFilter';
import TodoList from './components/TodoList';
import s from './App.module.css';
import { Component } from 'react';
import AddButton from './components/AddButton';
import shortid from 'shortid';

class App extends Component {
  state = {
    todos: [
      this.createTodoItem('Learn React'),
      this.createTodoItem('Learn Vue'),
      this.createTodoItem('Learn JavaScript'),
      this.createTodoItem('Learn TypeScript'),
    ],
  };

  createTodoItem(task) {
    return {
      id: shortid.generate(),
      task,
      important: false,
      done: false,
    };
  }

  deleteItem = id => {
    this.setState(prevState => ({ todos: prevState.todos.filter(task => task.id !== id) }));
  };

  addItem = task => {
    const item = this.createTodoItem('Learn Something');

    this.setState(prevState => ({ todos: [...prevState.todos, item] }));
  };

  onToggleProperty = (array, id, propName) => {
    const index = array.findIndex(todo => todo.id === id);

    const oldTask = array[index];
    const newTask = { ...oldTask, [propName]: !oldTask[propName] };

    return [...array.slice(0, index), newTask, ...array.slice(index + 1)];
  };

  onToggleImportant = id => {
    this.setState(({ todos }) => {
      return {
        todos: this.onToggleProperty(todos, id, 'important'),
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todos }) => {
      return {
        todos: this.onToggleProperty(todos, id, 'done'),
      };
    });
  };

  render() {
    const { todos } = this.state;

    const doneCount = todos.filter(task => task.done);
    return (
      <div className={s.todoApp}>
        <AppHeader todo={todos.length - doneCount.length} done={doneCount.length} />
        <main>
          <div className={`d-flex ${s.topPanel}`}>
            <SearchPanel />
            <StatusFilter />
          </div>
          <TodoList
            todos={todos}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
          <AddButton onAddItem={this.addItem} />
        </main>
        <AppFooter />
      </div>
    );
  }
}

export default App;
