// import s from './StatusFilter.module.css';

import { Component } from 'react';

class StatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  render() {
    const { onUseFilterButton, filter } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          type="button"
          className={`btn ${clazz}`}
          onClick={() => onUseFilterButton(name)}
          key={name}
        >
          {label}
        </button>
      );
    });
    return buttons;
  }
}

export default StatusFilter;
