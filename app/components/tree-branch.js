import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['tree-branch'],
  firstLevelNode: function() {
    return this.get("node").filter(function(node) {
      return node.get("isFirstLevel");
    });
  }.property("node"),
  actions:{
    addChild1: function(newNodeName, parentNode) {
      this.sendAction('childToAdd', newNodeName, parentNode);
    }
  }
});
