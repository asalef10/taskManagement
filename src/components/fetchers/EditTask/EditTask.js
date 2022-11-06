import { useEffect } from "react";

const EditTask = ({ lastValue, setToDoEdit, stateText }) => {
  useEffect(() => {
    setToDoEdit(lastValue);
  }, []);
  
  const editHandle = (e) => {
    if (stateText == "") {
      setToDoEdit(lastValue);
    } else {
      setToDoEdit(e.target.value);
    }
  };
  return (
    <>
      <td>
        <input
          type="text"
          defaultValue={lastValue}
          onChange={(e) => {
            editHandle(e);
          }}
        />{" "}
      </td>
    </>
  );
};
export default EditTask;
