import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('category');
  },
  actions: {
    addChild2: function (newNodeName, parentNode) {
      parentNode.get('children').pushObject(
        this.store.createRecord('category', {
          text: newNodeName
        })
      )
    }
  }
});
