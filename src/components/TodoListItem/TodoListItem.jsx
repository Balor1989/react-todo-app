// import s from "./TodoListItem.module.css";
import { BsFillTrashFill, BsExclamationLg } from 'react-icons/bs';

const TodoListItem = ({ task }) => {
  return (
    <div>
      <p>{task}</p>
      <button type="button" className="btn btn-outline-success btn-sm float-right">
        <BsExclamationLg />
      </button>

      <button type="button" className="btn btn-outline-danger btn-sm float-right">
        <BsFillTrashFill />
      </button>
    </div>
  );
};
export default TodoListItem;
