import { menus } from "./data/data.js";

let drink = document.querySelector("#drink");
let starter = document.querySelector("#starter");
let main = document.querySelector("#main");
let dessert = document.querySelector("#dessert");
let orderDishesId;
if (localStorage.getItem("orderDishes")) {
    orderDishesId = JSON.parse(localStorage.getItem("orderDishes"))
} else {
    orderDishesId = [];
}

menus.forEach(menu => {
    let cardModel = `
    <div class="fich">
        <i class="fa-regular fa-heart heart"></i>
        <img src=${menu.picture} class="img" alt=${menu.name}>
        <h3 class="title">${menu.name}</h3>
        <p class="description">${menu.description}</p>
        <div class="flex_content">
            <p class="price">${menu.price}€</p>
            <div class="flex">
                <button class="btnCommander" name="btnCommander">Ajouter au panier</button>
                <span class="compteur"><i class="fa-solid fa-minus minus"></i><span class="quantity"> 
                    
                </span><i class="fa-solid fa-plus plus"></i></span>
            </div>
        </div>
    </div> 
    `

    if (menu.type === "drink") {
        drink.innerHTML += cardModel
    } else if (menu.type === "starter") {
        starter.innerHTML += cardModel
    } else if (menu.type === "main") {
        main.innerHTML += cardModel
    } else {
        dessert.innerHTML += cardModel
    }
})

let orderButtons = document.querySelectorAll(".btnCommander");
let compteur = document.querySelectorAll(".compteur");

function order() {
    for (let i = 0; i < orderButtons.length; i++) {
        let dishesId = menus[i].id;
        quantity(i);

        if (orderButtons[i]) {
            orderButtons[i].addEventListener("click", () => {
                let DishesInLocalStorage = JSON.parse(localStorage.getItem("orderDishes"));
                let isAlreadyInCart = false;
                if (DishesInLocalStorage) {
                    console.log("Il y a déjà des articles dans le panier")
                    isAlreadyInCart = false;
                    for (let i = 0; i < DishesInLocalStorage.length; i++) {
                        console.log(DishesInLocalStorage[i].id)
                        if (DishesInLocalStorage[i].id === dishesId) {
                            console.log("Je suis déjà dans le panier")
                            orderDishesId[i].quantity += 1;
                            isAlreadyInCart = true;
                            break;
                        }
                    }
                    if (isAlreadyInCart === false) {
                        console.log("Je ne suis pas déjà dans le panier")
                        orderDishesId.push({
                            id: dishesId,
                            quantity: 1
                        })
                    }
                } else {
                    console.log("Le panier est vide")
                    orderDishesId.push({
                        id: dishesId,
                        quantity: 1
                    })
                }
                quantity(i)
                localStorage.setItem("orderDishes", JSON.stringify(orderDishesId))
                console.log(orderDishesId)
            }
            )
        }
    }
}

let dishesQuantity = document.querySelectorAll(".quantity")

function quantity(i) {
    let btnCards = document.querySelectorAll(".flex");
    let isAlreadyInCart = false;

    for (let k = 0; k < orderDishesId.length; k++) {
        isAlreadyInCart = false;
        if (orderDishesId[k].id === menus[i].id) {
            console.log("j'ai déjà été ajouté au panier")
            btnCards[i].innerHTML = `
                <td><i class="fa-solid fa-minus minus"></i><span class="quantity"> 
                    ${orderDishesId[k].quantity} 
                </span><i class="fa-solid fa-plus plus"></i></td>
                `
            console.log(orderButtons[i]);
            // updateQuantity()
            // compteur[i].style.display = "block";
            // dishesQuantity[i].innerText = `${orderDishesId[k].quantity} `
            isAlreadyInCart = true;
        }
    }
    if (!isAlreadyInCart) {
        orderButtons[i].style.display = "block";
    }
}

function updateQuantity() {
    let plusButtons = document.querySelectorAll(".plus");
    let minusButtons = document.querySelectorAll(".minus");
    let dishesQuantity = document.querySelectorAll(".quantity")

    console.log(plusButtons)
    console.log(minusButtons)
    for (let i = 0; i < plusButtons.length; i++) {
        let dishesId = menus[i].id;

        plusButtons[i].addEventListener("click", () => {
            for (let j = 0; j < orderDishesId.length; j++) {
                let quantity = orderDishesId[j].quantity;
                console.log(quantity)

                console.log(dishesId)
                if (orderDishesId[j].id === dishesId) {
                    orderDishesId[j].quantity += 1;
                    localStorage.setItem("orderDishes", JSON.stringify(orderDishesId))
                    dishesQuantity[i].innerHTML = (quantity + 1)
                }
            }
        })
    }

    for (let i = 0; i < minusButtons.length; i++) {
        let dishesId = menus[i].id;

        minusButtons[i].addEventListener("click", () => {
            for (let j = 0; j < orderDishesId.length; j++) {
                let quantity = orderDishesId[j].quantity;

                if (orderDishesId[j].id === dishesId && quantity > 1) {
                    orderDishesId[j].quantity -= 1;
                    localStorage.setItem("orderDishes", JSON.stringify(orderDishesId))
                    dishesQuantity[i].innerHTML = (quantity - 1)
                }
            }
        })
    }
}
order()
updateQuantity()

