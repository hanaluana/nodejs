// TODO: 매개변수를 받아서 최소값을 반환

function getMin (a,b){
    if (a > b){
        return b
    }
    return a
}

getMinFromArray = function(numbers){ // lowerCamelcase
    var min = Infinity
    for (num of numbers){
        min = (min>num)? num : min
    }
    return min
}
var min = getMin(1,2)

console.log(min)

console.log(getMinFromArray([2,1,0,-1,34,2]))
console.log(typeof(getMinFromArray))