export default {
  contactName: state => address => {
    for (let contact of state.contacts) {
      if (contact.address == address) return contact.name;
    }
    return null;
  },
  asset: state => () => {
    if (state.wallet.assets == null) return null;
    for (let asset of state.wallet.assets) {
      if (asset.assetId == state.asset.id) return asset;
    }
    return null;
  },
  symbol: state => () => {
    return state.asset.name;
  },
};