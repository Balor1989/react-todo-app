import TodoListItem from '../TodoListItem';
import s from './TodoList.module.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const element = todos.map(item => {
    const { id, ...props } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...props}
          onDeletedTask={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className={`list-group ${s.todoList}`}>{element}</ul>;
};

export default TodoList;
