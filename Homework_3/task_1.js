class Good {
    constructor (id, name, description, sizes, price, available) {
        this.id = id
        this.name = name
        this.description = description
        this.sizes = sizes
        this.price = price
        this.available = available
    }

    setAvailable(status) {
        this.available = status ? true : false
    }
}

class GoodsList {
    #goods = []
    
    constructor(sortPrice, sortDir, filter='.+') {
        this.filter = new RegExp(`${filter}`, 'i')
        this.sortPrice = sortPrice
        this.sortDir = sortDir
    }
    
    get list() {
        let filterList = this.#goods.filter(item => item.name.match(this.filter))
        return this.sortPrice ? filterList.sort((obj1, obj2) => this.sortDir ? obj1.price - obj2.price : obj2.price - obj1.price) : filterList
    }
    
    add(obj) {
        if (obj.constructor.name === 'Good' && this.#goods.findIndex(item => item == obj) === -1) {
            this.#goods.push(obj)
        }
    }
    
    remove(id) {
        let goodId = this.#goods.findIndex(item => item.id === id)
        if (goodId !== -1) {
            this.#goods.splice(goodId, 1)
        }
    }
}

class BasketGood extends Good {
    constructor(good) {
        super(good.id, good.name, good.description, good.sizes, good.price, good.available)
        this.amount = 0
    }
}

class Basket {
    constructor() {
        this.goods = []
    }

    get totalAmount() {
        return this.goods.map(item => item.price * item.amount).reduce((accumulator, value) => accumulator + value)
    }

    get totalSum() {
        return this.goods.reduce((accumulator, item) => accumulator + item.amount, 0)
    }

    add(good, amount) {
        if (good.constructor.name === 'BasketGood' && amount > 0) {
            good.amount += amount
            if (this.goods.findIndex(item => item === good) === -1) {
                this.goods.push(good)
            }
        }
    }

    remove(good, amount) {
        let goodId = this.goods.findIndex(item => item === good)
        if (goodId !== -1) {
            (good.amount - amount) > 0 ? good.amount -= amount : this.goods.splice(goodId, 1)
        }
    }

    clear() {
        this.goods.splice(0, this.goods.length)
    }

    removeUnavailable() {
        this.goods = this.goods.filter(item => item.available)
    }
}

const jeans = new Good(1, 'Джинсы', 'Качественные джинсы', [40, 41, 42, 43, 44], 5000, true)
const hat = new Good(2, 'Шапка', 'Зимняя шапка', [40, 41, 42], 1000, false)
const shirt = new Good(3, 'Майка', 'Модная майка', [39, 40, 41], 1500, true)
const shorts = new Good(4, 'Шорты', 'Летние шорты', [42, 43, 44], 2000, true)
const gloves = new Good(5, 'Перчатки', 'Лыжные перчатки', [40, 41], 2000, false)

const catalog = new GoodsList(false, true)

catalog.add(jeans)
catalog.add(hat)
catalog.add(shirt)
catalog.add(shorts)
catalog.add(gloves)
console.log('\nFULL CATALOG\n')
console.log(catalog.list)
catalog.sortPrice = true
console.log('\nFULL SORTED CATALOG (PRICE UP)\n')
console.log(catalog.list)
catalog.sortDir = false
console.log('\nFULL SORTED CATALOG (PRICE DOWN)\n')
console.log(catalog.list)
catalog.sortPrice = false
catalog.remove(3)
console.log('\nREMOVED ITEM 3\n')
console.log(catalog.list)

const basketItem1 = new BasketGood(jeans)
const basketItem2 = new BasketGood(hat)
const basketItem3 = new BasketGood(shirt)
const basketItem4 = new BasketGood(shorts)
const basketItem5 = new BasketGood(gloves)

const basket = new Basket()
basket.add(basketItem1, 3)
basket.add(basketItem2, 2)
console.log('\nADDED 2 DIFFERENT ITEMS TO BASKET\n')
console.log(basket)
basket.add(basketItem1, 2)
console.log('\nADDED SAME ITEM TO BASKET\n')
console.log(basket)
console.log('\nREMOVED 1 ITEMS AMOUNT 2\n')
basket.remove(basketItem1, 2)
console.log(basket)
basket.add(basketItem3, 2)
basket.add(basketItem4, 2)
basket.add(basketItem5, 2)
console.log('\nADDED MORE ITEMS TO BASKET\n')
console.log(basket)
console.log('\nREMOVED ALL UNAVAILABLE ITEMS\n')
basket.removeUnavailable()
console.log(basket)
console.log('\nTOTAL AMOUNT\n')
console.log(basket.totalAmount)
console.log('\nTOTAL SUM\n')
console.log(basket.totalSum)
console.log('\nEMPTY BASKET\n')
basket.clear()
console.log(basket)