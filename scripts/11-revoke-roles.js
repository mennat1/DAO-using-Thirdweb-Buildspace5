import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0x78Bd0EAf378172398D638bb0Bec51017ED3010ba",
);

(async () => {
  try {
    // Log the current roles.
    console.log(
      "👀 Roles that exist right now:",
      await tokenModule.getAllRoleMembers()
    );

    // Revoke all the superpowers your wallet had over the ERC-20 contract.
    await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
    console.log(
      "🎉 Roles after revoking ourselves",
      await tokenModule.getAllRoleMembers()
    );
    console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO treasury", error);
  }
})();

// Your app address is: 0xf7aC68F6f53f72C0c6E24DC58687A78a8E4e6cEF
// 👀 Roles that exist right now: {
//   admin: [ '0x937A003afF57BC3d8Ae5dCF8daDFd9647702360e' ],
//   minter: [
//     '0x937A003afF57BC3d8Ae5dCF8daDFd9647702360e',
//     '0xFBeE518dfF8E3f8b37AD57be800c03F89E884c3c'
//   ],
//   pauser: [ '0x937A003afF57BC3d8Ae5dCF8daDFd9647702360e' ],
//   transfer: [ '0x937A003afF57BC3d8Ae5dCF8daDFd9647702360e' ]
// }
// 🎉 Roles after revoking ourselves {
//   admin: [],
//   minter: [ '0xFBeE518dfF8E3f8b37AD57be800c03F89E884c3c' ],
//   pauser: [],
//   transfer: []
// }
// ✅ Successfully revoked our superpowers from the ERC-20 contract
