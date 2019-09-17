function repeatStringNumTimes(str, num) {
    let newStr = "";
    if(num >= 0){
      for(var i=0; i< num; i++){
        newStr += str;
      }
      return newStr;
    }else{
      return str = "";
    }
  }
  
  console.log(repeatStringNumTimes("abc", 3));