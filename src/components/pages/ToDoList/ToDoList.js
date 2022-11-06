import { useState } from "react";
import Table from "../../fetchers/Table/Table";
import { v4 as uuidv4 } from "uuid";
import AddTask from "../../fetchers/AddTask/AddTask";

const ToDoList = ({ dataList, setDataList, account }) => {
  const [newTask, setNewTask] = useState({ status: false });
  const [taskSearch, setTaskSearch] = useState("");
  const [isTask, setIsTask] = useState(false);

  const addTask = () => {
    setIsTask((prev) => !prev);
    if (dataList) {
      setDataList((oldArray) => [...oldArray, newTask]);
    } else {
      setDataList([newTask]);
    }

    let chartDetails = JSON.parse(
      localStorage.getItem(`${account}_chartDetails`)
    );
    const details = chartDetails || {};

    if (!details[newTask.time]) {
      chartDetails = { ...details, [newTask.time]: 0 };
      localStorage.setItem(
        `${account}_chartDetails`,
        JSON.stringify(chartDetails)
      );
    }
  };

  return (
    <>
      <input
        onChange={(e) => {
          setTaskSearch(e.target.value);
        }}
        type="text"
        placeholder="search"
      />
      <Table
        arr={dataList}
        setDataList={setDataList}
        taskSearch={taskSearch}
        account={account}
      />
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
