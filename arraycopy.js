function frankenSplice(arr1, arr2, n) {
    let tempArray1 = arr1.slice();
    let tempArray2 = arr2.slice();
  
    for(let i=0; i< tempArray1.length; i++){
      tempArray2.splice(n + i, 0, tempArray1[i]);
    }
  
    return tempArray2;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5], 1));