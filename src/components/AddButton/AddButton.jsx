import s from './AddButton.module.css';

const AddButton = ({ onAddItem }) => {
  return (
    <div className={s.addBox}>
      <button type="button" className="btn btn-info" onClick={() => onAddItem()}>
        Add Task
      </button>
    </div>
  );
};

export default AddButton;
