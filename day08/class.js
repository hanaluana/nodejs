
class Car {
    constructor(option){
        this.title = option.title
    }
    drive() {
        return 'Vrooom'
    }
}

const car = new Car({title:'lamborghini'})
console.log(car.title)
console.log(car.drive())
console.log(typeof car)

class Audi extends Car{
    constructor(option){
        super(option)
        this.color = option.color
    }
    stop(){
        return 'Dang'
    }
    drive(){
        return 'bewwwwwwac'
    }
}

const audi = new Audi({title:'lamborghini', color:'purple'})
console.log(audi.title)
console.log(audi.drive())
console.log(audi.stop())
console.log(audi)

car instanceof Car
console.log(car instanceof Audi)

