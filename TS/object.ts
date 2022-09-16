// let person:object = {    can also run, but will be inaccessible
// name: "Ali"
//}   

// let person: {name: string} = {
//     name: "Ali"
// }

// console.log(person.name); //Accessible

//Or another method

type objType = {name: string; age: number; email: string};
let person:objType = {
    name: "Ali",
    age: 10,
    email: "abc@gmail.com"
}