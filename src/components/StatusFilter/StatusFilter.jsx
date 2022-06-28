// import s from './StatusFilter.module.css';

import { Component } from 'react';

class StatusFilter extends Component {
  render() {
    const { onUseFilterButton } = this.props;
    return (
      <div className="btn-group">
        <button type="button" className="btn btn-info" onClick={() => onUseFilterButton('all')}>
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => onUseFilterButton('active')}
        >
          Active
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => onUseFilterButton('done')}
        >
          Done
        </button>
      </div>
    );
  }
}

export default StatusFilter;
