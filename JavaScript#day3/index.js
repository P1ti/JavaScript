      //While and for loops

      //While syntax
      while (true) {

      }

      //The code inside while loop is executed if the condition is truthy
      let i = 0;
      while (i < 3) {
        console.log(i);
        i++;
      }


      //Do...while syntax
      do {

      } while (true);

      //This loop will first execute the body, then check the condition, while is truthy execute it again and again

      let i = 0;
      do {
        console.log(i);
        i++;
      } while (i < 3);

      //For syntax
      for (begin; condition; step) {

      }

      for (var i = 0; i < 3; i++) {
        console.log(i);
      }


      //Switch syntax

      switch(x) {
        case 'value1':  // if (x === 'value1')
          ...
          [break]

        case 'value2':  // if (x === 'value2')
          ...
          [break]

        default:
          ...
          [break]
      }

      //switch loop start to compare a with case values

      let a = 2 + 2;

      switch (a) {
        case 3:
          console.log('Too small');
          break;
        case 4:
          console.log('Too small');
          break;
        case 5:
          console.log('Too big')
          break;
        default:
          console.log("I don't know such values");
          break;
      }
