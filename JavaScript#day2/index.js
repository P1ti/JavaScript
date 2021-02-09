    // Comparisons

    //We will use math operators
    let a;
    let b;

    a > b; //a is greater than b
    a < b; //a is less than b

    a >= b; //a is greater than or equal b
    a <= b; //a is less than or equal b

    a == b; //a is equal with b
    a === b; //a is strict equal with b
    a = b; //assign the value of b to a

    //Boolean is the result (TRUE \ FALSE)


    //Conditional branching IF
    //evaluate a condition in parentheses, if the result is true will run a block of code

    if (4 < 10) {
      console.log("4 is less than 10");
    }

    //Values like "", NaN, undefined, null or false are considered "falsy" values
    //And other values are considered "truthy" values

    //Else clause is executed when the condition is false

    if (4 > 10) {
      console.log("4 is greater than 10");
    } else {
      console.log("4 is less than 10");
    }

    //If we want to try several variants of a condition, we can use else if (..)
    if (4 == 10) {
      console.log("4 is equal with 10");
    } else if (4 > 10) {
      console.log("4 is greater than 10");
    } else {
      console.log("4 is less than 10");
    }

    //Conditional operator '?'

    //let result = condition ? value1 : value2;
    //if the condition is true, than value1 is returned, otherwise value2
