import { menus } from "./data/data.js";

let drink = document.querySelector("#drink");
let starter = document.querySelector("#starter");
let main = document.querySelector("#main");
let dessert = document.querySelector("#dessert");
let orderDishesId = [];

menus.forEach(menu => {
    if (menu.type === "drink") {
        drink.innerHTML += `
        <div class="fich">
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
// orderButtons.addEventListener("click", order)

function order() {
    console.log(orderButtons)
    for (let i = 0; i < orderButtons.length; i++) {
        let dishesId = menus[i].id;

        orderButtons[i].addEventListener("click", () => {
            orderDishesId.push({
                id: dishesId,
                quantity: 1
            })
            console.log(orderDishesId)
        }
        )
    }

}

order()

