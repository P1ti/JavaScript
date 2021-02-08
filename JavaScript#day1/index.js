console.log("Hello, World!");


  //JavaScript variables
  //A variable is a "named storage" for a data
  //Variable declaration

  let message;
  message = "How are you?"; //store a string to this variable

  let age = 20; //declare the variable and assign the value

  //Data types
  //A value in JS is always of a certain type
  //All types can be stored in variables

  let integer = 12; //integer variable
  let float = 12.3; //float variable
  let bigInt = 1434234325123532412332503004320n; //The "n" at the end means that is a bigInt
  let name = "John"; //string variable
  console.log("Hello, ${name}!"); //embed a string variable
  let boolean = true; //boolean is true or false variable

  let age = null; //null means "empty", "value unknown"
  let age = undefined; //better to use null, and it means value is not assigned

  console.log(typeof(integer)); //typeof(x) will return a string with the type name

  //JavaScript interaction: alert, confirm and prompt

  alert("This is a alert message"); //shows a message and waits the user to press "OK"

  confirm("Is this a modal?"); //return TRUE if "OK" is pressed or FALSE if "CANCEL" is pressed

  prompt("What's your name?"); //shows a message asking the user to input text. If it's pressed "CANCEL" the value will be null
