import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    addNote: function () {
      var note = { title: 'New Note', body: 'Lorem ipsum…' };

      $.post('/api/notes', note).done(function (data) {
        this.get('content').pushObject(data);
      }.bind(this)).fail(function (data) {
        alert('Something went wrong with saving the note. Check the console.');
        console.log('POST request failed!', data);
      });
    }

  }

});