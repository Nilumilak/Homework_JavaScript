goodsItems = [
    {
        id: 1,
        name: 'Джинсы',
        description: 'Качественные джинсы',
        sizes: [40, 41, 42, 43, 44],
        price: 5000,
        available: true,
    },
    {
        id: 2,
        name: 'Шапка',
        description: 'Зимняя шапка',
        sizes: [40, 41, 42],
        price: 1000,
        available: false,
    },
    {
        id: 3,
        name: 'Майка',
        description: 'Модная майка',
        sizes: [39, 40, 41],
        price: 1500,
        available: true,
    },
    {
        id: 4,
        name: 'Шорты',
        description: 'Летние шорты',
        sizes: [42, 43, 44],
        price: 2000,
        available: true,
    },
    {
        id: 5,
        name: 'Перчатки',
        description: 'Лыжные перчатки',
        sizes: [40, 41],
        price: 2000,
        available: false,
    },
]

basket = [
    {
        good: 3,
        amount: 2,
    },
    {
        good: 4,
        amount: 3,
    },
]

function addItem(itemId, itemAmount) {
    if (goodsItems[itemId-1] !== undefined && goodsItems[itemId-1].available === true) {
        addItem._added = false
        for (let i of basket) {
            if (i.good === itemId) {
                i.amount += itemAmount
                addItem._added = true
            }
        }
        if (!addItem._added) {
            basket.push({good: itemId, amount: itemAmount})
        }
    }
}

function removeItem(itemId) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].good === itemId) {
            basket.splice(i, 1)
        }
    }
}

function erraseBasket() {
    basket.splice(0, basket.length)
}

function total() {
    total._sum = 0
    total._amount = 0
    for (item of basket) {
        total._sum += goodsItems[item.good - 1].price * item.amount
        total._amount += item.amount
    }
    return {
        totalAmount: total._amount,
        totalSum: total._sum
    }
}

console.log('Basket: ', basket)
addItem(1, 2)
console.log('Added item 1, amount 2')
console.log('Basket: ', basket)
addItem(3, 2)
console.log('Added item 3, amount 2. Already exists in the basket')
console.log('Basket: ', basket)
addItem(2, 2)
console.log('Added item 2, amount 2. Item 2 is not available for sale')
console.log('Basket: ', basket)
removeItem(4)
console.log('Removed item 4 from basket')
console.log('Basket: ', basket)
console.log('Total sum: ', total())
erraseBasket()
console.log('Basket: ', basket)