'use strict';
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideByTen(userinput: number): void{
    try {
      if (userinput === 0){
        throw new Error("fail")
      }

      let result: number = 10 / userinput;
      console.log(result);

    } catch(e){
      console.log(e.message);
    }
  }
  
  divideByTen(0);