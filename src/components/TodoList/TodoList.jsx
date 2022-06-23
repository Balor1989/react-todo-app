import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = () => {
  return (
    <ul>
      <li>
        <TodoListItem task="Learn React" />
      </li>
      <li>
        <TodoListItem task="Learn Vue" />
      </li>
    </ul>
  );
};

export default TodoList;
