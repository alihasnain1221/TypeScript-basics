"use strict";
class Users {
    // constructor (name: string) {     //One way
    //     this.name = name;
    // }
    constructor(name) {
        this.name = name;
    } //Short hand way, to grab and assign the class member
    setName(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
let User1 = new Users("Ali");
User1.setName("Ali");
// User1.name="Bhai";  //To make it inaccessible, use private
User1.getName();
