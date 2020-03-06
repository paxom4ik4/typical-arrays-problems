let min = array[0];
let max = array[0];
let sum = array[0];

exports.min = function min (array) {
    for(let i; i < array.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
  }
  
  exports.max = function max (array) {
    for(let i; i < array.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return min;
  }
  
  exports.avg = function avg (array) {
    for(let i; i < array.length; i++){
        sum += arr[i];
    } 
    return sum/array.length;
  }
