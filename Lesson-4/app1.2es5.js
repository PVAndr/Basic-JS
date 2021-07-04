"use strict"
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function (text) {
    this.text = text;
}
let post1 = new Post("Vladimir", "Hello World", new Date())
console.log(post1);
post1.edit("hello Vladimir")
console.log(post1);

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}
let attached1 = new AttachedPost("Admin", "World Hello", new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit("hello Admin");
console.log(attached1);