export default {
  setWallet(state, wallet) {
    state.wallet = wallet;
  },
  setTxList(state, txlist) {
    state.txlist = txlist;
  },
  setContacts(state, contacts) {
    state.contacts = contacts;
  },
  saveContact(state, { address, name }) {
    if (state.contacts == null) state.contacts = [];
    for (let i = 0; i < state.contacts.length; i++) {
      if (state.contacts[i].address == address) {
        state.contacts[i].name = name;
        localStorage[state.wallet.address] = JSON.stringify({ contacts: state.contacts })
        return;
      }
    }
    state.contacts.push({ address, name });
    localStorage[state.wallet.address] = JSON.stringify({ contacts: state.contacts })
  },
};