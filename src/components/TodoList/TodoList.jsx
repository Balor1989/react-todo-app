import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({ todos }) => {
  const element = todos.map(({ id, task }) => {
    return (
      <li key={id} className="list-group-item">
        <TodoListItem task={task} />
      </li>
    );
  });
  return <ul className="list-group">{element}</ul>;
};

export default TodoList;
