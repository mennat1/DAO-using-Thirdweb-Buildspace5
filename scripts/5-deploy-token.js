import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0xf7aC68F6f53f72C0c6E24DC58687A78a8E4e6cEF");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "SaveTheSlumsDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "STS",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();

//✅ Successfully deployed token module, address: 0x78Bd0EAf378172398D638bb0Bec51017ED3010ba
