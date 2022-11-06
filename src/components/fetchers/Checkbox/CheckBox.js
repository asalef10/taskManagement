const Checkbox = ({checkbox,updateStatus,item}) => {
  return (
    <>
      <input
        onChange={(e) => {
          updateStatus(item.id, e.target.checked);
        }}
        type="checkbox"
        name="vehicle1"
        value="isDone"
        checked={checkbox}
      />
      <label for="vehicle1"> Done</label>
    </>
  );
};
export default Checkbox