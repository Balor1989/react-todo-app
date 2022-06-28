import { Component } from 'react';
import s from './AddButton.module.css';

class AddButton extends Component {
  state = { task: '' };

  onTaskChange = e => {
    this.setState({
      task: e.target.value,
    });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onAddItem(this.state.task);
    this.setState({
      task: '',
    });
  };
  render() {
    return (
      <form className={s.addBox} onSubmit={this.onFormSubmit}>
        <input
          value={this.state.task}
          type="text"
          className="form-control"
          onChange={this.onTaskChange}
          placeholder="write the name of the task"
        />
        <button type="submit" className={`btn btn-info ${s.borderBtn}`}>
          Add Task
        </button>
      </form>
    );
  }
}

export default AddButton;
