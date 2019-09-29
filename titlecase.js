function titleCase(str) {
    let strArray = str.toLowerCase().split(' ');
    let newArray = [];
    for(let i=0; i< strArray.length; i++){
      var tempArray = strArray[i].split('');
      var firstLetter = tempArray.shift().toUpperCase();
      tempArray.unshift(firstLetter);
      newArray.push(tempArray.join(''));
    }
    
    return newArray.join(' ');
  }
  
  console.log(titleCase("I'm a little tea pot"));