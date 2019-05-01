//Promise
// .then() 성공시 결과를 넘겨줌
// .catch() 실패시 결과를 넘겨줌


//new Promise().then().then().then() // 무한대로 연결 가능

const orderCoffee = (order) => new Promise ((resolve, reject)=>{
    //비동기적인 작업
    //order가 제대로 들어왔는지 확인
    if (order == undefined){
        //실패했을 때
        reject('손님 주문 안하셨는데요;;')
    }
    let coffee
    setTimeout(()=>{
        //성공했을 때
        coffee = order
        resolve(coffee)
    },1000);
})

/*
orderCoffee()
    .then((e) => {console.log(e)}) // 이렇게 하면 Promise 가 반환됨. 여기서 반환값(return) 이 undefined라서, 뒤에 value에는 undefined가 들어감.
    .then((value)=>{console.log(value)})
*/

orderCoffee('아메리카노')
    .then((e)=>{
        console.log(e)
        return orderCoffee('라떼')
    })
    .then((e)=>{
        console.log(e)
    })
    .catch((e)=>{console.log(e)})


fetch('https://koreanjson.com/posts/1')
    .then(response => response.json()) // serialize : 자바스크립트 오브젝트로 바꾸겠음.
    .then(e=>console.log(e))
    .catch(e=>console.log(e))








