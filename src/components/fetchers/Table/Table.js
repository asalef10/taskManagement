import { useRef, useState } from "react";
import EditTask from "../EditTask/EditTask.js";
import Button from "../Button/Button.js";
import { ExportTableToExcel } from "../ExportTableEl/ExportTableEl.js";
import UseUtils from "../../useTable/UseTable.js";
import ReadTask from "../ReadTask/ReadTask.js";

const Table = ({ dataList, setDataList, taskSearch, account }) => {
  const [toDoEditId, setToDoEditId] = useState(null);
  const [editDescription, setEditDescription] = useState("");
  const [editPriorityLevel, setEditPriorityLevel] = useState("");
  const [filterPerformedTask, setFilterPerformedTask] = useState(false);
  const tableRef = useRef(null);
  const { updateStatus, deleteTask, editToDo, filterListTaskDone } = UseUtils({
    account,
    setDataList,
    setToDoEditId,
    editDescription,
    editPriorityLevel,
    setFilterPerformedTask,
  });

  return (
    <>
      <br />
      <input
        type="checkbox"
        onChange={filterListTaskDone}
        value="showTaskDone"
      />
      &nbsp;
      <label for="vehicle1">Show tasks performed</label>
      <table ref={tableRef} className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">priority level</th>
            <th scope="col">status</th>
            <th scope="col">time </th>
          </tr>
        </thead>
        <tbody>
          {dataList
            ?.filter((value) => {
              if (filterPerformedTask) {
                return value.status;
              } else if (
                value.Description?.toLowerCase().includes(
                  taskSearch.toLowerCase().trim()
                )
              ) {
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
                        <ReadTask item={item} updateStatus={updateStatus} />
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
                        deleteTask(i, item.id, setDataList);
                      }}
                      item={item}
                    />
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      <ExportTableToExcel tableRef={tableRef} />
      <br />
    </>
  );
};
export default Table;
