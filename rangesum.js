function sumAll(arr) {
    arr.sort((a,b) => a - b);
    var count = 0;
    for(var i=arr[0]; i<= arr[1]; i++){
      count += i;
    }
  
    return count;
  }
  
  console.log(sumAll([1, 4]));