# Introduction

The goal of this project is to create a front user menu tree where user can adds and
removes categories on first level or in subdirectories.

# Why

I tried first some complete project like: 
[ember-cli-jstree](https://github.com/ritesh83/ember-cli-jstree), 
[ember-idx-tree](https://github.com/indexiatech/ember-idx-tree)
but with my little level on ember i didn't found a way to make working it (probably
due also by outdated version of ember-cli used for there projects).
Pending the time where i wish developers of there projects update there great code,
i from scratch done a minimal construction of a tree (first for education, next cause
i really need that functionality for a project).
So i publish this short piece of code in MIT because i need that you, enthusiastic
developer help me to improve this code, so please fork it and pull request !

# @todo

- validate logic on recursive component usage of sendAction method use case (@see
  comment on `tree-node.hbs`).
- transform this code into a add-on (wip [here](https://github.com/Axxon/ember-cli-minimal-tree) use addon_integration branch).
- create npm install repo.
- I don't see too faraway for this project it's a study repository.

## Documentation (base work)

- [How to Implement a Tree in Ember.js by Billy Billing](http://dev.billysbilling.com/blog/How-to-implement-a-tree-in-Ember-js)
- [Using Recursive Components in Ember.js by Omar Ismail](https://robots.thoughtbot.com/using-recursive-components-in-emberjs)
