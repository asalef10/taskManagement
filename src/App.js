import "./App.css";
import HomePage from "./components/pages/Home/HomePage";
import { useWeb3React } from "@web3-react/core";
import LogIn from "./components/pages/LogIn/LogIn";

function App() {
  const { account } = useWeb3React();

  const addressShortcut = (addressWallet) => {
    let address = `${addressWallet?.slice(0, 6)}...${addressWallet?.slice(
      -4
    )} `;
    return address;
  };

  return (
    <>
      <h4>{account && addressShortcut(account)}</h4>
      {account ? <HomePage /> : <LogIn />}
    </>
  );
}

export default App;
