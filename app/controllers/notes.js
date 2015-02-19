import Ember from 'ember';

export default Ember.ArrayController.extend({

  numberOfNotes: function () {
    return this.get('content').length;
  }.property('content.[]')

});
