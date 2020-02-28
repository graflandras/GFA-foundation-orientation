export class Sum{

    numbers: Number[]
  
    constructor(numbers: Number[]) {
      this.numbers = numbers;
    };
  
    sum() {
      let sumelements = (accumulator, currentValue) => accumulator + currentValue;
      let result = this.numbers.reduce(sumelements);
      return result;
    }
}
  