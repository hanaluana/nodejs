
console.log(sum1)
console.log(sum2)


function sum1(a,b){
    return a+b
}


// lambda 표현식
const sum2 = function (a,b){
    return a+b
}

const sum3 = (a,b) => {
    return a+b
}

const sum4 = (a,b) => a+b

console.log(sum2(1,2))
console.log(sum3(1,2))
console.log(sum4(1,2))

// 그냥 sum2에서의 this: 실행 시점의 객체를 바라봄
// arrow function 에서의 this: 선언 시점의 객체를 바라보게 됨
