import s from './TodoListItem.module.css';
import { BsFillTrashFill, BsExclamationLg } from 'react-icons/bs';

const TodoListItem = ({ task, important = false }) => {
  const importantActive = {
    color: important ? 'tomato' : 'black',
    fontWeight: important ? 'bold' : 'normal',
  };

  return (
    <div className={`d-flex justify-content-between ${s.todoListItem}`}>
      <p style={importantActive}>{task}</p>
      <div>
        <button type="button" className="btn btn-outline-success btn-sm float-right">
          <BsExclamationLg />
        </button>

        <button type="button" className="btn btn-outline-danger btn-sm float-right">
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};
export default TodoListItem;
