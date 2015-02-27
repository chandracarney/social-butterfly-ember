import Ember from 'Ember';

export default Ember.Controller.extend({
  actions: {
    addContacts: function() {
      let contact = this.getProperties('firstName', 'lastName');
      this.get('content').pushObject(contact);
    }
  }
});
