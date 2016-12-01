import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('account');
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('newAcount', this.store.createRecord('account'));
  },

  actions: {

    addNewAcount(newAcount) {
      newAcount.save().then(
        account => {
          console.info('New account saved: ', account);

          // Reset the `newAcount` property with an empty record.
          this.controller.set('newAcount', this.store.createRecord('account'));
        },
        error => {
          console.error('Error from server:', error);
        });
    },

    editAcount(account) {
      account.set('isEditing', true);
    },

    cancelEditing(account) {
      account.rollbackAttributes();
      account.set('isEditing', false);
    },

    updateAcount(account) {
      account.save().then(
        account => account.set('isEditing', false)
      );
    },

    deleteAcount(account) {
      account.destroyRecord();
    }
  }
});
