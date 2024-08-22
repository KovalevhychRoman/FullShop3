const mainPage = document.getElementsByClassName('main-page')[0]
mainPage.addEventListener('click', () => location.href = 'https://kovalevhychroman.github.io/FullShop3/')
const productItem = Array.from(document.getElementsByClassName('product-item'))
const count = Array.from(document.getElementsByClassName('count'))
const minus = Array.from(document.getElementsByClassName('minus'))
const plus = Array.from(document.getElementsByClassName('plus'))
const binCount = document.getElementsByClassName('bin-count')[0]
const binPrice = document.getElementsByClassName('bin-price')[0]
const buy = Array.from(document.getElementsByClassName('buy'))
const menuCategories = document.getElementsByClassName('menu-categories')[0]
const productName = Array.from(document.getElementsByClassName('product-name'))
const searchInput = document.getElementsByClassName('search-input')[0]
const searchButton = document.getElementsByClassName('search-button')[0]
const page = document.getElementsByClassName('page')[0]
const cosmetic = document.getElementsByClassName('cosmetic')[0]
const care = document.getElementsByClassName('care')[0]
const health = document.getElementsByClassName('health')[0]
const house = document.getElementsByClassName('house')[0]
const parfume = document.getElementsByClassName('parfume')[0]
let itemsAmount = 0
let price = 0
let currentSwitch = 1
let productClass = []
let categoryItem = ''
let countContent = []
count.forEach((item, i) => {
    countContent[i] = 1
})
console.log(countContent)
window.onload = function load() {
    binChange(price, itemsAmount)
}
try {
    itemsAmount = Number(localStorage.getItem('itemsAmount'))
    price = Number(localStorage.getItem('price'))
} catch (error) {
}

function binChange(price, itemsAmount) {
    binCount.textContent = itemsAmount
    binPrice.textContent = price
}

function classAdd(itemClass, item) {
    item.classList.add(itemClass)
}
//function createProduct(item) {
//    item.insertAdjacentHTML('beforeend', `
//        <div class="product-item">
//                    <p class="product-name"></p>
//                    <div class="buttons">
//                        <button class="buy">Купити</button>
//                        <p class="price">500 грн</p>
//                        <div class="number">
//                            <button class="minus">-</button>

//                            <p class="count">1</p>
//                            <button class="plus">+</button>
//                        </div>
//                    </div>
//                </div>
//        `)
//}
productName.forEach((item, i) => {
    let k = Math.floor(Math.random() * 5)
    if (k == 0) {
        productClass[i] = 'cosmetic'
        item.textContent = 'Тонік'
        item.classList.add(productClass[i])
        productName[i].insertAdjacentHTML('beforebegin', `<img src="img/tonic.jpg" class = 'transfer'  alt="#">`)
    } else if (k == 1) {
        productClass[i] = 'care'
        item.textContent = 'Мило'
        productName[i].insertAdjacentHTML('beforebegin', `<img src="img/care.jpg" class = 'transfer' alt="#">`)
    } else if (k == 2) {
        productClass[i] = 'health'
        item.textContent = 'Вітаміни'
        productName[i].insertAdjacentHTML('beforebegin', `<img src="img/vitamin.jpg" class = 'transfer' alt="#">`)
    } else if (k == 3) {
        productClass[i] = 'house'
        item.textContent = 'Засіб для посуди'
        productName[i].insertAdjacentHTML('beforebegin', `<img src="img/house.jpg" class = 'transfer' alt="#">`)
    } else if (k == 4) {
        productClass[i] = 'parfume'
        item.textContent = 'Парфум'
        productName[i].insertAdjacentHTML('beforebegin', `<img src="img/parfume.jpg" class = 'transfer' alt="#">`)
    }
    classAdd(productClass[i], productItem[i])
})
function categoryCheck(category) {
    productItem.forEach((element,i) => {
        for (let index = 0; index < element.classList.length; index++) {
            if(element.classList[index]==category) {
                element.style.display = 'block'
            } else {
                element.style.display = 'none'
            }
        }   
    });
}

cosmetic.addEventListener('click', () => {
    categoryCheck('cosmetic')

})
care.addEventListener('click', () => {
    categoryCheck('care')

})
health.addEventListener('click', () => {
    categoryCheck('health')

})
house.addEventListener('click', () => {
    categoryCheck('house')

})
parfume.addEventListener('click', () => {
    categoryCheck('parfume')

})
let transfer = Array.from(document.getElementsByClassName('transfer'))
transfer.forEach(item => item.addEventListener('click', (e) => {
    let currentImg = e.currentTarget.src
    localStorage.removeItem('img')
    localStorage.setItem('img', currentImg)

    location.href = 'https://kovalevhychroman.github.io/product/'
}))
searchButton.addEventListener('click', () => {
    productItem.forEach((item, i) => {
        if (productName[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
    page.scrollIntoView({ behavior: "smooth", block: "start" })
})

minus.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (countContent[i] == 1) {
            return
        } else {
            countContent[i]--
        }
        count[i].textContent = countContent[i]
    })
})
plus.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (countContent[i] < 30) {
            countContent[i] = countContent[i] + 1
        } else {
            return
        }
        count[i].textContent = countContent[i]
    })
})
buy.forEach((item, i) => item.addEventListener('click', () => {
    localStorage.clear()
    let itemPrice = 500
    if (itemsAmount + countContent[i] <= 100) {
        itemsAmount += countContent[i]
    } else {
        alert('У вас загато продуктів у кошику!!!')
        return
    }
    price = itemsAmount * itemPrice
    binChange(price, itemsAmount)
    localStorage.setItem('itemsAmount', itemsAmount)
    localStorage.setItem('price', price)
}))


