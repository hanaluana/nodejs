
const orderCoffee = (order, callback) => {
    let coffee
    setTimeout(()=>{
        coffee = order
        callback(coffee)
    },1000);

    return coffee
}

const coffee = orderCoffee('아아', (coffee) => {
    console.log(coffee)
})
// console.log(coffee)