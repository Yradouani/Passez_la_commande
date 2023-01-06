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
    if (menu.type === "drink") {
        drink.innerHTML += `
        <div class="fich">
            <i class="fa-regular fa-heart heart"></i>
            <img src=${menu.picture} class="img" alt=${menu.name}>
            <h3 class="title">${menu.name}</h3>
            <p class="description">${menu.description}</p>
            <div class="flex">
                <p class="price">${menu.price}€</p>
                <button class="btnCommander">Commander</button>
            </div>
        </div> 
        `
    } else if (menu.type === "starter") {
        starter.innerHTML += `
        <div class="fich">
            <i class="fa-regular fa-heart heart"></i>
            <img src=${menu.picture} class="img" alt=${menu.name}>
            <h3 class="title">${menu.name}</h3>
            <p class="description">${menu.description}</p>
            <div class="flex">
                <p class="price">${menu.price}€</p>
                <button class="btnCommander">Commander</button>
            </div>
        </div> 
        `
    } else if (menu.type === "main") {
        main.innerHTML += `
        <div class="fich">
            <i class="fa-regular fa-heart heart"></i>
            <img src=${menu.picture} class="img" alt=${menu.name}>
            <h3 class="title">${menu.name}</h3>
            <p class="description">${menu.description}</p>
            <div class="flex">
                <p class="price">${menu.price}€</p>
                <button class="btnCommander">Commander</button>
            </div>
        </div> 
        `
    } else {
        dessert.innerHTML += `
        <div class="fich">
            <i class="fa-regular fa-heart heart"></i>
            <img src=${menu.picture} class="img" alt=${menu.name}>
            <h3 class="title">${menu.name}</h3>
            <p class="description">${menu.description}</p>
            <div class="flex">
                <p class="price">${menu.price}€</p>
                <button class="btnCommander">Commander</button>
            </div>
        </div> 
        `
    }

})

let orderButtons = document.querySelectorAll(".btnCommander");

function order() {
    for (let i = 0; i < orderButtons.length; i++) {
        let dishesId = menus[i].id;

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
            localStorage.setItem("orderDishes", JSON.stringify(orderDishesId))
            console.log(orderDishesId)
        }
        )
    }
}
order()

