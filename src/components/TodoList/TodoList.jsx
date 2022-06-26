import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({ todos }) => {
  const element = todos.map((item) => {
    return (
      <li key={item.id}>
        <TodoListItem task={item.task} />
      </li>
    );
  });
  return <ul>{element}</ul>;
};

export default TodoList;
