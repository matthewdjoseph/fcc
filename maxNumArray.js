function largestOfFour(arr) {
    let largestNums = [];
  
    for(let i=0; i< arr.length; i++){
      largestNums.push(Math.max(...arr[i]));
    }
  
    return largestNums;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));