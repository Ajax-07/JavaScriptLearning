/* ----------------------------------------------------------------------------------------------------------

- Variables are Containers for Storing Data
- JavaScript Variables can be declared in 4 ways:

Using const   ---- used to declare for constant that cannot be changed anymore once intialized.
                   Always use "const" if the value or type (array, object )should not be changed 

Using var     ---- it is a old way to declare variable that has scope problem
                   that is cured by let, prefer to use let rather than var. Only use if you MUST support old browsers

using let     ---- it is most used in modern javascript because it solved the scope problem. only use let if cannot use const.

Automatically ---- it is a way to declare variable without any type. 
                   it automatically declares when variabe first used: but it's not a good practice 



--------------------------------------------------------------------------------------------------------------*/

const accountID = 144622;
let accountMail = "ajay@google.com";
var accountPassword = 7779922;
accountCity = "Pune"; // here accountCity will be declared when it used for first time.

console.table([accountID, accountMail, accountPassword, accountCity]); // print all in one go

// accountID = 5555;          // not allowed - can't change the const variable

console.log(accountID);

accountMail = "ajay@outlook.com";
accountPassword = 11111;
accountCity = "Darbhanga";

let accountState; // if varibale is not initalized then it will be "undefined"

console.table([
  accountID,
  accountMail,
  accountPassword,
  accountCity,
  accountState,
]);

// You can declare many variables in one statement.

let $ = "John Doe",
  $$car = "Volvo",
  _200 = 200;

console.table([$, $$car, _200]); // JS treate $ and _ as letter
