const Button = ({ nameButton, selectorName, handleButton,item }) => {
  return (
    <button
      className={selectorName}
      onClick={() => {
        handleButton(item.id,item);
      }}
    >
      {nameButton}
    </button>
  );
};
export default Button
