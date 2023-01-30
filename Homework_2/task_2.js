goodsItems = {
    1: {
        name: 'Джинсы',
        description: 'Качественные джинсы',
        sizes: [40, 41, 42, 43, 44],
        price: 5000,
        available: true,
    },
    2: {
        name: 'Шапка',
        description: 'Зимняя шапка',
        sizes: [40, 41, 42],
        price: 1000,
        available: false,
    },
    3: {
        name: 'Майка',
        description: 'Модная майка',
        sizes: [39, 40, 41],
        price: 1500,
        available: true,
    },
    4: {
        name: 'Шорты',
        description: 'Летние шорты',
        sizes: [42, 43 ,44],
        price: 2000,
        available: true,
    },
    5: {
        name: 'Перчатки',
        description: 'Лыжные перчатки',
        sizes: [40, 41],
        price: 2000,
        available: false,
    },
}

basket = {
    3: {
        amount: 2,
    },
    4: {
        amount: 3,
    },
}

function addItem(itemId, itemAmount) {
    if (goodsItems[itemId] !== undefined && goodsItems[itemId].available === true){
        if (basket[itemId] !== undefined) {
            basket[itemId].amount += itemAmount
        } else {
            basket[itemId] = {amount: itemAmount}
        }
    }
}

function removeItem(itemId) {
    if (basket[itemId] !== undefined) {
        delete basket[itemId]
    }
}

function erraseBasket() {
    for (item in basket) {
        delete basket[item]
    }
}

function total() {
    total._sum = 0
    total._amount = 0
    for (item in basket) {
        total._sum += goodsItems[item].price * basket[item].amount
        total._amount += basket[item].amount
    }
    return {
        totalAmount: total._amount,
        totalSum: total._sum
    }
}

addItem(1, 2)
console.log('Basket: ', basket)
addItem(3, 2)
console.log('Basket: ', basket)
addItem(2, 2)
console.log('Basket: ', basket)
removeItem(4)
console.log('Basket: ', basket)
console.log('Total sum: ', total())
erraseBasket()
console.log('Basket: ', basket)