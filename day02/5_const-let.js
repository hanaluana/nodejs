// let => 재할당이 가능한, 변경 가능한 변수 선언할 때 사용
// const => 재할당이 불가능한, 변경 불가능한 변수 선언할 때, 상수

// var와 let의 차이? 
// var는 함수 단위 스코프 
// let, const: 블럭단위 스코프 => 함수 안에서 (블럭), if문 안에서(블럭)만 유효한 변수들. 그 상위 스코프(그 밖)에서는 접근 못함

var message = '안녕하세요'
if (true){
    console.log(message) // 상위 스코프에서 선언된 변수들은 이렇게 하위 스코프에서 사용 가능
    var message2 = '안녕하세요'
    let message3 = '안녕?'
}
console.log(message2)
//console.log(message3) // 이건 불가능. let,const는 블럭 단위 스코프라서, 해당 블록(함수 안)에서 선언 되면 그 밖에서는 사용 불가능

let count = 0
count = count+1

const name = 'hanaluana'
const getMinFromArray = (numbers)=>{
    // 함수 쓸 때 사용
}
console.log(count)
console.log(name)