function getIndexToIns(arr, num) {
    var tempArray = arr.sort((a,b) => a - b);
  
    for(var i=0; i< tempArray.length; i++){
      if(num <= tempArray[i]){
        return i;
      }
    }
  
    return tempArray.length;
  }
  
  console.log(getIndexToIns([5, 3, 20, 3], 30));