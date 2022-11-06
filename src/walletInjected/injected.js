import { InjectedConnector } from "@web3-react/injected-connector";
const injected = new InjectedConnector({
  supportedChainIds: [1337, 80001, 1, 3, 4, 5, 42, 137, 56, 43114, 421611],
});
export { injected };
