export default {
  contactName: state => address => {
    for (let contact of state.contacts) {
      if (contact.address == address) return contact.name;
    }
    return null;
  },
};