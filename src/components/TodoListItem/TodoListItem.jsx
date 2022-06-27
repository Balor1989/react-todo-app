import s from './TodoListItem.module.css';
import { BsFillTrashFill, BsExclamationLg } from 'react-icons/bs';
import { Component } from 'react';

class TodoListItem extends Component {
  state = { done: false };

  taskHendler = () => {
    console.log(`click! ${this.props.task}`);
  };

  render() {
    const { done } = this.state;
    const { task, important = false } = this.props;

    let classNames = `${s.task} `;
    if (done) {
      classNames += 'text-decoration-line-through';
    }

    const importantActive = {
      color: important ? '#8A2BE2' : '#000',
      fontWeight: important ? 'bold' : 'normal',
    };

    return (
      <div className={`d-flex justify-content-between ${s.todoListItem}`}>
        <p className={classNames} style={importantActive} onClick={this.taskHendler}>
          {task}
        </p>
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
  }
}

export default TodoListItem;
