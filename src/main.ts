// Using 'any' is very rarely advised. It throws the rule set out of the window. 'any' is bad, and we can do better.

// let str: any = 'foo';
// str = 5;
//////////////////////////////////////////////////////


// str is assigned the type 'string'. This throws an error because you cannot reassign it to anything but a string.

// let str: string = 'string';
// str = 5;
//////////////////////////////////////////////////////


// This will NOT throw an error, because using the | operator, we are clarifying that this variable can be a string OR a number type.

// let str: string | number = 'string';
// str = 5;
//////////////////////////////////////////////////////


// The first variable(strArray) will throw an error, because its type is a string array (string[]). By simply changing it to a string, it does not meet the type requirements of a string array (string[]).
// The second variable (strArray2) will not throw an error, because it is successfully changing it from one string array, to another string array. It is a clean exchange and follows the type requirements set.

// let strArray: string[] = ['1', '2', '3'];
// strArray = 'foo';

// let strArray2: string[] = ['4', '5', '6']
// strArray2 = ['foo'];
//////////////////////////////////////////////////////


// If we leave out a type, it defaults to 'any' and takes away the benefits of TypeScript. We must specify the types for the parameters.
// Both parameters are set to type 'string'. In the first console.log, it will throw an error because the first parameter is entered as a boolean.
// The second console.log will not throw an error because both parameters are entered as the preset type -- strings.
// Define the parameter types, and then define the type that is expected to be output. It is good to be deliberate about everything, as that's what TypeScript is made to do.

// const getFullName = (name: string, surname: string): string => {
//     return `${name} ${surname}`;
// }
// console.log(getFullName(true, 'Clark'));
// console.log('Corey', 'Clark');
//////////////////////////////////////////////////////


// Our first set of types indicate that this is an OBJECT that must consist of a STRING for a name and a NUMBER for an age.
// When we copy and paste the type requirements from user, to user2, if any property is missing (such as age), it will throw an error.
// While copy and pasting type requirements works, it's even better to just write it once and have it work. That's where INTERFACES come in. They are entities that act as a sort of structure of what's (properties) required.
// INTERFACE is a reserved word, and the name of the interface should always start with a capital (like classes / constructors).

// interface User {
//     name: string
//     age?: number
// }

// VVV By utilizing an interface, these examples can be deleted and written cleaner. VVV

// const user: {name: string, age: number} = {
//     name: 'Corey',
//     age: 32,
// }

// const user2: {name: string, age: number} = {
//     name: 'Sam',
// }

// ^^^ By utilizing an interface, these examples can be deleted and written cleaner. ^^^

// Now that we have a template (interface), we can apply that template to the objects. If the object is missing any of the properties needed, it will throw an error.
// user2 is missing the 'age' property. This goes against the User interface, so it will throw an error.
// However, within our interface, we can make it so certain properties are NOT necessary. By putting a question mark after 'age' in the interface (age?), this makes it so we can do with or without the age property in a given block of code. It reduces the need of it being MANDATORY.

// const user: User = {
//     name: 'Corey',
//     age: 32,
// }

// const user2: User = {
//     name: 'Sam',
// }

// When you try to access a variable followed by a '.', it will bring up a list of all available properties to that variable. This is a wonderful 'autocomplete' feature of TypeScrip's. It will only list what that variable has access to.

// console.log(user.)
//////////////////////////////////////////////////////


// Let's add a function within an interface.

// interface User {
//     name: string
//     age?: number
//     getMessage(): string
// }

// Now that we've added a new property requirement to our interface, our two variables will throw errors again.
// Always make sure to return some sort of information inside of a function or it will throw an error.

// const user: User = {
//     name: 'Corey',
//     age: 32,
//     getMessage() {
//         return `Hello, my name is ${this.name}.`
//     },
// }

// const user2: User = {
//     name: 'Sam',
//     getMessage() {
//         return `Hello, my name is ${this.name}.`
//     },
// }

// When typing 'user.', the newly-added function is now added to the list of properties you can select.

// console.log(user.)
//////////////////////////////////////////////////////



