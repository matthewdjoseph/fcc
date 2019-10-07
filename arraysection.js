function chunkArrayInGroups(arr, size) {
    var newArray = new Array();
    var length = arr.length;
  
    for(var i=0; i< length / size; i++){
      newArray.push(arr.splice(0, size));
    }
  
    return newArray;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));