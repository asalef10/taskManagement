const AddTask = ({ setNewTask, id, newTask, addTask }) => {
  return (
    <>
      <form onSubmit={addTask}>
        <input
          required={true}
          type="text"
          onChange={(e) => {
            setNewTask({
              ...newTask,
              id: id,
              Description: e.target.value.trim(),
            });
          }}
          placeholder="Description"
        />
        <input
          required={true}
          type="text"
          onChange={(e) => {
            setNewTask({
              ...newTask,
              time: new Date().toLocaleDateString("he-il"),
              priorityLevel: e.target.value.trim(),
            });
          }}
          placeholder="priority level"
        />
        &nbsp;
        <button type="submit" className="btn btn-light">
          new Task
        </button>
      </form>
    </>
  );
};
export default AddTask;
