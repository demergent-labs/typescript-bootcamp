import { Canister, nat, query, update } from 'azle';

// This is a global variable that is stored on the heap
let counter: nat = BigInt(0);

export default Canister({
  // Query calls complete quickly because they do not go through consensus
  get: query([], nat, () => {
    return counter;
  }),
  // Update calls take a few seconds to complete
  // This is because they persist state changes and go through consensus
  add: update([nat], nat, (n) => {
    counter += n;
    return counter;
  }),
  inc: update([], nat, () => {
    counter += BigInt(1);
    return counter;
  }),
});
