import LineChart from "../LineChart/LineChart";
import ToDoList from "../ToDoList/ToDoList";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { account } = useWeb3React();
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    if (account) {
      const storageArray = JSON.parse(localStorage.getItem(account));
      setDataList(storageArray);
    }
  }, [account]);

  useEffect(() => {
    if (account) {
      if (dataList) {
        localStorage.setItem(account, JSON.stringify(dataList));
      }
    }
  }, [dataList]);

  return (
    <>
      <div id="container">
        <h2 id="TitlePage">Task management</h2>
        <ToDoList
          dataList={dataList}
          setDataList={setDataList}
          account={account}
        />
        {account && <LineChart arrayList={dataList} account={account} />}
      </div>
    </>
  );
};
export default HomePage;
