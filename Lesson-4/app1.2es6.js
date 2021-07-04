"use strict"
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}
let post1 = new Post("Vladimir", "Hello World", new Date())
console.log(post1);
post1.edit("hello Vladimir")
console.log(post1);

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date)
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}
let attached1 = new AttachedPost("Admin", "World Hello", new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit("hello Admin");
console.log(attached1);