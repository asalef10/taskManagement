import { useWeb3React } from "@web3-react/core";
import { injected } from "../../../walletInjected/injected";
const LogIn = () => {
  const { activate } = useWeb3React();
  const connectWallet = () => {
    if (window.ethereum) {
      activate(injected);
    } else {
      alert(
        "To use applications , please install metamask extension in the browser",
        "red"
      );
    }
  };

  return (
    <>
      <div id="containerLogIn">
        <div id="miniContainer">
          <h2 id="TitlePage">Welcome to Task management</h2>
          <br />

          <h4 id="TitlePage">
            To use applications you need connect MetaMask Wallet
          </h4>
          <button
            id="buttonLogIn"
            className="btn btn-info"
            onClick={connectWallet}
          >
            Connect MetaMask
          </button>
        </div>
      </div>
    </>
  );
};
export default LogIn;
