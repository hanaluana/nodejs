// TODO: 

var _ = require('lodash')
var numbers = _.range(1, 46);
picks = _.sampleSize(numbers,6)

console.log(`행운의 변호는 ${picks}`)

const luckyNumbers = [29,32,44,24,2,41]

// random으로 생성한 6개의 숫자가 
// lucky numbers와 얼마나 비슷한지 카운트를 반환하는 함수
const match = (arr1, arr2) => {
    return _.intersection(arr1,arr2).length
}

const match2 = (arr1, arr2) => {
    let cnt = 0
    for (num of arr1){
        if (arr2.includes(num)){
            cnt+=1
        }
    }
    return cnt
}

const match3 = (arr1, arr2) => {
    let cnt = 0
    for (num of arr1){
        if (_.includes(arr2,num)){
            cnt+=1
        }
    }
    return cnt
}

console.log(match(luckyNumbers,picks))
