import TodoListItem from '../TodoListItem/TodoListItem';
import s from './TodoList.module.css';

const TodoList = ({ todos }) => {
  const element = todos.map(({ id, task, important }) => {
    return (
      <li key={id} className="list-group-item">
        <TodoListItem task={task} important={important} />
      </li>
    );
  });

  return <ul className={`list-group ${s.todoList}`}>{element}</ul>;
};

export default TodoList;
