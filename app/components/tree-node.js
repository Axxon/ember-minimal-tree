import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['tree-node'],
  isExpanded: false,
  actions: {
    toggle: function() {
      this.toggleProperty('isExpanded');
    },
    didClick: function() {
      alert('You clicked: '+this.get('node.text'));
    },
    addChild: function(node) {
      var newNode = prompt('Please enter your new name category');
      this.sendAction('childToAdd', newNode, node);
    },
    removeChild: function(node) {
      node.destroyRecord();
      return false;
    },
    addChild0: function(newNode, node){
      this.sendAction('childToAdd', newNode, node);
    }
  }
});
