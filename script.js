// const person = {
//     name : ["Bob", "Smith"],
//     age : 32,
//     bio : function () {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },

//     introduceSelf : function () {
//         console.log(`Hi! I'm ${this.name[0]}.`);
//     }
// };


// An object like this is called an OBJECT LITERAL 
// const person = {
//     name : {
//         first : "Bob",
//         last : "Smith"
//     },
//     age : 32,
//     bio() {
//         console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
//     },

//     introduceSelf(){
//         console.log(`Hi! I'm ${this.name.first}.`);
//     },
// }


// UPDATING OBJECT VALUES

// const person = {
//     name : {
//         first : "Bob",
//         last : "Smith"
//     },
//     age : 32,
// }
// person.name.first = "Sean"
// person.age = 14

// const myDataName = "height";
// const myDataValue = "1.75m";

// person[myDataName] = myDataValue


const person1 = {
    name : "Chris",
    introduceSelf() {
        console.log(`Hey I'm ${this.name}`)
    }
}

// Introducing Constructors 

function createPerson (name){
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };

    return obj
}

const frankie = createPerson("Frankie");
frankie.introduceSelf()