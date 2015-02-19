import Ember from 'ember';

export default Ember.ObjectController.extend({

  editing: false,

  actions: {

    startEditing: function () {
      this.set('editing', true);
    },

    stopEditing: function () {
      $.post('/api/notes/' + this.get('id'), this.get('content'));
      this.set('editing', false);
    }

  }

});