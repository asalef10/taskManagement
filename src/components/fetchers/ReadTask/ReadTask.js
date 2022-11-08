import Checkbox from "../Checkbox/CheckBox";

const ReadTask = ({item,updateStatus}) => {
  return (
    <>
      <td>{item.Description}</td>
      <td>{item.priorityLevel}</td>
      <td>
        <>
          {item.status ? (
            <Checkbox checkbox={true} updateStatus={updateStatus} item={item} />
          ) : (
            <Checkbox 
              checkbox={false}
              updateStatus={updateStatus}
              item={item}
            />
          )}
        </>
      </td>
      <td>{item.time?.toString()}</td>

    </>
  );
};
export default ReadTask