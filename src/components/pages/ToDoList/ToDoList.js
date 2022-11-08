import { useState } from "react";
import Table from "../../fetchers/Table/Table";
import { v4 as uuidv4 } from "uuid";
import AddTask from "../../fetchers/AddTask/AddTask";
import UseTable from "../../useTable/UseTable";
const ToDoList = ({ dataList, setDataList, account }) => {
  const [newTask, setNewTask] = useState({ status: false });
  const [taskSearch, setTaskSearch] = useState("");
  const [isTask, setIsTask] = useState(false);
  const { addTask } = UseTable({ setDataList, setIsTask, dataList, newTask });

  return (
    <>
      <input
        onChange={(e) => {
          setTaskSearch(e.target.value);
        }}
        type="text"
        placeholder="search"
      />
      <br />
      <Table
        dataList={dataList}
        setDataList={setDataList}
        taskSearch={taskSearch}
        account={account}
      />
      <br />
      &nbsp;
      {isTask ? (
        <>
          <AddTask
            id={uuidv4()}
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        </>
      ) : (
        <button
          className="btn btn-light"
          onClick={() => {
            setIsTask((prev) => !prev);
          }}
        >
          Add
        </button>
      )}
      <br />
    </>
  );
};
export default ToDoList;
