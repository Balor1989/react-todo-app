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
    if (!this.state.task) {
      return;
    }
    this.props.onAddItem(this.state.task);
    this.setState({
      task: '',
    });
  };
  render() {
    const isActive = this.state.task !== '' ? 'btn-info' : 'btn-outline-secondary';
    return (
      <form className={s.addBox} onSubmit={this.onFormSubmit}>
        <input
          value={this.state.task}
          type="text"
          className="form-control"
          onChange={this.onTaskChange}
          placeholder="write the name of the task"
        />
        <button type="submit" className={`btn ${isActive} ${s.borderBtn}`}>
          Add Task
        </button>
      </form>
    );
  }
}

export default AddButton;
