// Using 'any' is very rarely advised. It throws the rule set out of the window. 'any' is bad, and we can do better.

// let str: any = 'foo';
// str = 5;
//////////////////////////////////////////////////////


// str is assigned the type 'string'. This throws an error because you cannot reassign it to anything but a string.

// let str: string = 'string';
// str = 5;
//////////////////////////////////////////////////////


// This will NOT throw an error, because using the '|' operator, we are clarifying that this variable can be a string OR a number type. This is called a UNION.

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

// Here, we have name collision. Because we can make both classes and interfaces in TS, it is best practice to distinctly identify your interface names.

// class User { };
// interface User { };

// Here, we've explicitly made known that the interface is an interface by adding 'interface' the name.

// class User { };
// interface UserInterface { };
//////////////////////////////////////////////////////

// Trying to assign a STRING type to an UNKNOWN type will throw an error. However, we are able to remedy this by using TYPE ASSERTION.

// let vUnknown: unknown = 10;
// let s1: string = vUnknown;

// By using the 'as' operation, we perform a TYPE ASSERTION.

// let vUnknown: unknown = 10;
// let s1: string = vUnknown as string;

// Here, pageNumber cannot be assigned, because it is a string and numericPageNumber is of type number. But if we use 'as' to perform TYPE ASSERTION, we can make it possible.
// This process took a number type, assigned it using type assertion to an unknown type, then used type assertion again to change it to a number type.

// let pageNumber: string = '1';
// let numericPageNumber: number = (pageNumber as unknown) as number;
//////////////////////////////////////////////////////


// A common way to pull elements from an HTML document is to query select them, then use type assertion 'as' to list it as an HTML element.
// In the example below, the '.value' will throw an error. But once you list someElement as an HTMLInputElement, the error goes away.

// const someElement = document.querySelector(".foo") as HTMLInputElement;
// console.log('someElement', someElement.value);


// In this example, if we do not create a variable to define 'target', we will get errors such as, "value does not exist on type EventTarget."
// To remedy this, we create a variable that defines target and sets its type to HTMLInputElement. This now makes 'value' exist on such a property.

// const someElement = document.querySelector(".foo");
// const target = event.target as HTMLInputElement;
// someElement.addEventListener('blur', (event) => {
//     console.log('event', target.value)
// })
//////////////////////////////////////////////////////


// It could be argued that using 'type aliases' over interfaces is better/cleaner.
// With an interface, you do not have the '=' sign. An interface must always be an object.

// type Admin = string;

// const boss: Admin = 'Joe';

// // With a type, you're able to use unions. It allows you to set two different rule sets in one template. With interfaces, you cannot.
// // This example would allow us to either use a singular address, or use an array to list multiple addresses:

// type Address = string | string[];

// const addressSingular: Address = 'Washington, PA';
// const addressMultiple: Address = ['Pittsburgh, PA', 'Cecil, PA', 'Springhill, FL'];

// // Like with an interface, a type can also be an object:

// type Car = {
//     make: string
//     model: string
//     year: number
// }

// const myCar: Car = {
//     make: 'Hyundai',
//     model: 'Accent',
//     year: 2019,
// }

// // If you wish to use a template, but want to leave out some values, you can use the 'Omit' keyword:

// type UserProps = {
//     name: string;
//     age: number;
//     created: Date;
// }

// type GuestProps = Omit<UserProps, "name" | "age">;

// // Another example of creating a type that can take 3 parameters can be done without an 'either / or'. You can make parameters mandatory in another way:

// type AddressArray = [number, string];

// const addresses = [123, 'Grant Street', 456, 'Bishop Ave', 789, 'Hatfield Ave'];

// // In the above example, you're able to make it so you can have a number and string within an array type.

// // Interfaces can be 'merged'. If you have more than one interface with the same name, it will merge the properties, but multiple blocks of code will still exist. This could become confusing on a huge project. Confusion is not good.
// interface User {
//     name: string;
//     age: number;
// }
// interface User {
//     role: string;
// }

// // We have two interfaces that have merged properties and no errors were thrown. Because we can declare an interface more than once, there's no telling when it could change. This leads to being UNPREDICTABLE.

// let newUser: User = {
//     name: 'Corey',
//     age: 32,
//     role: 'Developer',
// }

// // But if we were to create two of the same type aliases, it won't even let you declare it more than once:

// type Wrestling = {
//     team: string;
//     colors: string;
//     members: number;
// }

// type Wrestling = {
//     ages: number;
// }

// // As shown above, it will not allow us to use the same type alias twice. This allows for a more straightforward structure. TypeScript is about keeping things simple and uniform -- this aligns with that.
// // You can still 'extend' a type alias, but it would need to be laid out as such:

// type Wrestling2 = Wrestling & {
//     role: string;
// }

// let coach: Wrestling2 = {
//     team: 'Tenth',
//     colors: 'red',
//     members: 23,
//     role: 'front',
// }

// In the above example, if we make the 'coach' variable contingent on the type 'Wrestling', it'll require us to use the properties listed in Wrestling. All is well. But if we make it contingent on type Wrestling2, it will require all of the properties from Wrestling AND Wrestling2.
// All in all, it is called TYPEscript... not INTERFACEscript. Interfaces have their place, but it does seem like type aliases are a great default habit to get into.
//////////////////////////////////////////////////////


// In this example, we are using generic types. They are used to show a correlation between different values/expected values of code. They are superior to 'any', because unlike 'any', generic types can be named anything you want, but still produce a correlation.
// When using generic types, it's important to always first include them in angle brackets after the variable/function name '<>'. Then the desired generic next to the parameter(s), and then after the parameters to define the expected type within the produced result.
// In this example, you can see we have our two desired generic types in angle brackets '<T, K>', what we expect each parameter to me 'T and then K', and then our expected result output '[T and K in array format]'. Remember, it's about creating correlation.

// function createArrayPair<T, K>(input1: T, input2: K): [T, K] {
//     return [input1, input2];
// };

// createArrayPair("Hello", 10);

// The above example is with a traditional function. The below example is what an arrow function format would look like.
// The format is SLIGHTLY different (the angle brackets <> go after the = sign), but the principles are the same. Generics help us avoid the use 'any'. 'Any' is no good, and we can do better.

// const arrayPair = <T, K>(input1: T, input2: K): [T, K] => {
//     return [input1, input2];
// };

// arrayPair("Hello", 10);

// Generic types can even be used in place of regular types. While there's no reason to do this if the type exists, this is to show it's possible. These two examples would grant the same results:

// function primeExample(input1: string, input2: number): string {
//     return `Hello, my name is ${input1} and I am ${input2} years of age.`;
// };
// console.log(primeExample("Corey", 32));

// function primeExample2<T, S>(input1: T, input2: S): string {
//     return `Hello, my name is ${input1} and I am ${input2} years of age.`;
// }
// console.log(primeExample2("Corey", 32));

// // Note in the example above that we only list STRING for the output of the function -- not string AND number. Because while the function does have a number parameter, the overall output is a STRING, even when a number is contained within it.

// // The use of VOID is also worth noting on this matter. If a function merely performs an action but doesn't produce a result, the function output should be set to VOID (as seen below):

// function primeExample3(message: string): void {
//     console.log(message);
// }
//////////////////////////////////////////////////////
