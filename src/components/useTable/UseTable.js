const UseTable = ({
  setDataList,
  account,
  setToDoEditId,
  editDescription,
  editPriorityLevel,
  setFilterPerformedTask,
  setIsTask,
  dataList,
  newTask
}) => {
  const deleteTask = (removeIndex, itemId) => {
    updateStatus(itemId, false);
    setDataList((oldArray) => {
      return oldArray.filter((value, i) => i !== removeIndex - 1);
    });
  };

  const updateStatus = (id, status) => {
    console.log(account);
    let chartDetails = JSON.parse(
      localStorage.getItem(`${account}_chartDetails`)
    );

    setDataList((task) =>
      task.map((obj) => {
        if (obj.id === id) {
          let itemCount = chartDetails[obj.time];
          if (status) {
            itemCount++;
          } else {
            itemCount--;
          }
          chartDetails[obj.time] = itemCount;

          localStorage.setItem(
            `${account}_chartDetails`,
            JSON.stringify(chartDetails)
          );
          return {
            ...obj,
            status: status,
          };
        }
        return obj;
      })
    );
  };
  const editToDo = (id) => {
    setDataList((task) =>
      task.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            Description: editDescription,
            priorityLevel: editPriorityLevel,
          };
        }
        return obj;
      })
    );
    setToDoEditId(null);
  };

  const filterListTaskDone = () => {
    setFilterPerformedTask((prev) => !prev);
  };

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

  return {
    deleteTask,
    updateStatus,
    editToDo,
    filterListTaskDone,
    addTask
  };
};

export default UseTable;
