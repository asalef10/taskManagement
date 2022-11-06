import { useState } from "react";
import EditTask from "../EditTask/EditTask.js";
import Checkbox from "../Checkbox/CheckBox.js";
import Button from "../Button/Button.js";

const Table = ({ arr, setDataList, taskSearch, account }) => {
  const [toDoEditId, setToDoEditId] = useState(null);
  const [editDescription, setEditDescription] = useState("");
  const [editPriorityLevel, setEditPriorityLevel] = useState("");

  const deleteTask = (removeIndex, itemId) => {
    updateStatus(itemId, false);
    setDataList((oldArray) => {
      return oldArray.filter((value, i) => i !== removeIndex - 1);
    });
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

  const updateStatus = (id, status) => {
    console.log(id);
    setDataList((task) =>
      task.map((obj) => {
        if (obj.id === id) {
          let chartDetails = JSON.parse(
            localStorage.getItem(`${account}_chartDetails`)
          );

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

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">priority level</th>
          <th scope="col">status</th>
        </tr>
      </thead>
      <tbody>
        {arr
          ?.filter((value) => {
            if (taskSearch === "") {
              return value;
            } else if (value.Description?.includes(taskSearch.trim())) {
              return value;
            }
          })
          ?.map((item, i) => {
            return (
              <>
                <tr key={item.id}>
                  <th scope="row">{(i += 1)}</th>
                  {toDoEditId === item?.id ? (
                    <>
                      <EditTask
                        lastValue={item.Description}
                        setToDoEdit={setEditDescription}
                        stateText={editDescription}
                        title="Description"
                      />
                      <EditTask
                        lastValue={item.priorityLevel}
                        setToDoEdit={setEditPriorityLevel}
                        stateText={editPriorityLevel}
                        title="priorityLevel"
                      />
                    </>
                  ) : (
                    <>
                      <td>{item.Description}</td>
                      <td>{item.priorityLevel}</td>
                      <td>
                        <>
                          {item.status ? (
                            <Checkbox
                              checkbox={true}
                              updateStatus={updateStatus}
                              item={item}
                            />
                          ) : (
                            <Checkbox
                              checkbox={false}
                              updateStatus={updateStatus}
                              item={item}
                            />
                          )}
                        </>
                      </td>
                    </>
                  )}
                  {toDoEditId === item.id ? (
                    <Button
                      nameButton={"save"}
                      selectorName={"btn btn-primary"}
                      handleButton={editToDo}
                      item={item}
                    />
                  ) : (
                    <Button
                      nameButton={"edit"}
                      selectorName={"btn btn-info"}
                      handleButton={() => {
                        setToDoEditId(item.id);
                      }}
                      item={item}
                    />
                  )}
                  &nbsp;
                  <Button
                    nameButton={"delete"}
                    selectorName={"btn btn-danger"}
                    handleButton={() => {
                      deleteTask(i, item.id);
                    }}
                    item={item}
                  />
                </tr>
              </>
            );
          })}
      </tbody>
    </table>
  );
};
export default Table;
