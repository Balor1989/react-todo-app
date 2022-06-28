import s from './TodoListItem.module.css';
import { BsFillTrashFill, BsExclamationLg } from 'react-icons/bs';
import { Component } from 'react';

class TodoListItem extends Component {
  render() {
    const { task, onDeletedTask, onToggleImportant, onToggleDone, done, important } = this.props;

    let classNames = `${s.task}`;
    if (done) {
      classNames += ' text-decoration-line-through';
    }
    if (important) {
      classNames += ` ${s.important}`;
    }

    return (
      <div className={`d-flex justify-content-between ${s.todoListItem}`}>
        <p className={classNames} onClick={onToggleDone}>
          {task}
        </p>
        <div>
          <button
            type="button"
            className="btn btn-outline-success btn-sm float-right"
            onClick={onToggleImportant}
          >
            <BsExclamationLg />
          </button>

          <button
            type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onDeletedTask}
          >
            <BsFillTrashFill />
          </button>
        </div>
      </div>
    );
  }
}

export default TodoListItem;
