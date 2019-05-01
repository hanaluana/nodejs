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


const getCoffee = async (order) => {
    try {
        const coffee = await orderCoffee(order) // resolve된 값이 coffee에 담긴다. reject되는 경우는 에러가 나서 밑으로 더이상 안 들어간다.
        console.log(coffee)

        const coffee2 = await(orderCoffee('아아'))
        console.log(coffee2)
    }catch (error){
        console.log(error)
    }
}

getCoffee('따아')





