let Pencil = require('pencil');
let tags = require('./tags');
let tagList = [].push(tags.marko).push(tags.lasso);

for (let tag of tagList)
  addTag(tag);

function addTag(tagName) {
  Pencil.define('', {
    initialize: function(){
      var self = this;
      this.tag.tag(tagName);
    },
    render: function(){
      return this;
    }
  });
}
