/*
Keywords in JavaScript are predefined, reserved words that have a special meaning 
built directly into the language's syntax.


Category: Variable Declarations
keywords: var, let, const
What They Do: Define variables and constants.
*/

/*
A variable is like a labelled box
┌─────────────┐
│   score     │
│     100     │
└─────────────┘
The label is score.

The value inside is 100.

let - use let when the value needs to be change
const - use const when the value should not be change
*/

// This is my score
let score = 100; // initailizing a variable
console.log(score);
score = 200;
console.log(score);
// My score changed from 100 to 200
/*
const schoolName 
console.log(schoolName)

SyntaxError: Missing initializer in const declaration
*/
const schoolName = "ABC School";
console.log(schoolName);

// We should not change it later.
// schoolName = "XYZ School";
// This gives an error because const cannot be reassigned.


