import { menus } from "./data/data.js";

let drink = document.querySelector("#drink");
let starter = document.querySelector("#starter");
let main = document.querySelector("#main");
let dessert = document.querySelector("#dessert");
let orderDishesId;
let isAlreadyPushInCart = true;
let hasCalledUpdateQuantity = false;
// let hasCalledQuantity = false;
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
        let isAlreadyInCart = false;
        if (orderButtons[i]) {
            orderButtons[i].addEventListener("click", () => {
                console.log("je suis dans le addeventlistener du bouton")

                if (!isAlreadyInCart) {
                    orderDishesId.push({
                        id: dishesId,
                        quantity: 1
                    })
                    isAlreadyInCart = true;
                    hasCalledUpdateQuantity = false;
                }
                localStorage.setItem("orderDishes", JSON.stringify(orderDishesId))
                quantity(i)
            }
            )
        }
    }
}

function quantity(i) {
    let btnCards = document.querySelectorAll(".flex");
    let isAlreadyInCart = false;
    // hasCalledUpdateQuantity = false;
    // if (orderDishesId === []) {
    //     btnCards[i].innerHTML = '<button class="btnCommander" name="btnCommander">Ajouter au panier</button>'
    // }
    for (let k = 0; k < orderDishesId.length; k++) {
        // isAlreadyInCart = false;
        if (orderDishesId[k].id === menus[i].id) {
            console.log("j'ai déjà été ajouté au panier")
            btnCards[i].innerHTML = `
                <td><i class="fa-solid fa-minus minus"></i><span class="quantity"> 
                    ${orderDishesId[k].quantity} 
                </span><i class="fa-solid fa-plus plus"></i></td>
                `
            if (!hasCalledUpdateQuantity) {
                var plusButtons = document.querySelectorAll(".plus");
                var minusButtons = document.querySelectorAll(".minus");
                var dishesQuantity = document.querySelectorAll(".quantity")
                console.log(plusButtons)
                plusButtons[i].addEventListener("click", () => {
                    console.log(plusButtons[k])
                    for (let j = 0; j < orderDishesId.length; j++) {
                        let quantity = orderDishesId[j].quantity;

                        if (orderDishesId[j].id === menus[i].id) {
                            console.log("j'ajoute 1 à la quantité")
                            orderDishesId[j].quantity += 1;
                            localStorage.setItem("orderDishes", JSON.stringify(orderDishesId))
                            dishesQuantity[i].innerHTML = (quantity + 1)
                        }
                    }
                })

                minusButtons[i].addEventListener("click", () => {
                    for (let j = 0; j < orderDishesId.length; j++) {
                        let quantity = orderDishesId[j].quantity;

                        if (orderDishesId[j].id === menus[i].id && quantity > 1) {
                            orderDishesId[j].quantity -= 1;
                            localStorage.setItem("orderDishes", JSON.stringify(orderDishesId))
                            dishesQuantity[i].innerHTML = (quantity - 1)
                        }
                        // else if (orderDishesId[j].id === menus[i].id && quantity == 1) {
                        //     console.log("je veux enlever cet élément du tableau")
                        //     orderDishesId.splice(j, 1)
                        //     localStorage.setItem("orderDishes", JSON.stringify(orderDishesId))
                        // }
                    }
                })

                hasCalledUpdateQuantity = true
            }
            isAlreadyInCart = true;
        }
    }
    if (!isAlreadyInCart) {
        orderButtons[i].style.display = "block";
    }
}

function updateQuantity(a) {
    var plusButtons = document.querySelectorAll(".plus");
    var minusButtons = document.querySelectorAll(".minus");
    var dishesQuantity = document.querySelectorAll(".quantity")
    console.log(a)

    // console.log("J'augmente ma quantité de 1")
    for (let i = 0; i < plusButtons.length; i++) {
        let dishesId = menus[i].id;

        plusButtons[i].addEventListener("click", () => {
            console.log(plusButtons)
            for (let j = 0; j < orderDishesId.length; j++) {
                let quantity = orderDishesId[j].quantity;

                if (orderDishesId[j].id === dishesId) {
                    console.log("j'ajoute 1 à la quantité")
                    orderDishesId[j].quantity += 1;
                    localStorage.setItem("orderDishes", JSON.stringify(orderDishesId))
                    dishesQuantity[i].innerHTML = (quantity + 1)
                }
            }
        })
    }

    for (let i = 0; i < minusButtons.length; i++) {
        let dishesId = menus[i].id;
        let btnCards = document.querySelectorAll(".flex");

        minusButtons[i].addEventListener("click", () => {
            for (let j = 0; j < orderDishesId.length; j++) {
                let quantity = orderDishesId[j].quantity;

                if (orderDishesId[j].id === dishesId && quantity > 1) {
                    orderDishesId[j].quantity -= 1;
                    localStorage.setItem("orderDishes", JSON.stringify(orderDishesId))
                    dishesQuantity[i].innerHTML = (quantity - 1)
                } else if (orderDishesId[j].id === dishesId && quantity == 1) {
                    console.log("je veux enlever cet élément du tableau")
                    orderDishesId.splice(j, 1)
                    localStorage.setItem("orderDishes", JSON.stringify(orderDishesId))
                    // orderButtons[i].style.display = "block";
                    // btnCards[i].innerHTML = `<button class="btnCommander" name="btnCommander">Ajouter au panier</button>
                    // `
                    // btnCards[i].style.setProperty("display", "block");
                }
            }
        })
    }
    isAlreadyPushInCart = true;
}
order()
let a = "titi"

// if (!hasCalledUpdateQuantity) {
function initialFunction() {
    updateQuantity(a)
}
initialFunction()
// }
// for (let i = 0; i < orderButtons.length; i++) {
//     quantity(i);
// }



