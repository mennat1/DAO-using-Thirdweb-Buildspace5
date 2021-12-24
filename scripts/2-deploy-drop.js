import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xf7aC68F6f53f72C0c6E24DC58687A78a8E4e6cEF");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "SavingTheSlumsDAO Membership",
      // A description for the collection.
      description: "My first DAO, funding projects that save slums.",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/photo.jpeg"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()


// Your app address is: 0xf7aC68F6f53f72C0c6E24DC58687A78a8E4e6cEF
// ✅ Successfully deployed bundleDrop module, address: 0xA34aC69a1ca124638908094d7f26Ba21Dd6f777b
// ✅ bundleDrop metadata: {
//   metadata: {
//     name: 'SavingTheSlumsDAO Membership',
//     description: 'My first DAO, funding projects that save slums.',
//     image: 'https://cloudflare-ipfs.com/ipfs/bafkreidhm6umzlxbllfbhojakubawpk55mq64465z7m6rgd25pcxmnixmy',
//     primary_sale_recipient_address: '0x0000000000000000000000000000000000000000',
//     uri: 'ipfs://bafkreif2skrzlrbyj4x7g3lyyezzto5o2ftutx75by7mqgq2itagwhfylu'
//   },
//   address: '0xA34aC69a1ca124638908094d7f26Ba21Dd6f777b',
//   type: 11
// }
