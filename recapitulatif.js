import { menus } from "./data/data.js";
let orderDishes = JSON.parse(localStorage.getItem("orderDishes"));
let tableContent = document.querySelector("tbody");
let totalPriceOfOneDishe;
let totalContent = document.querySelector("#total");
let total = 0;


for (let i = 0; i < orderDishes.length; i++) {
    let dishId = orderDishes[i].id;
    for (let j = 0; j < menus.length; j++) {
        if (dishId === menus[j].id) {
            totalPriceOfOneDishe = parseFloat((orderDishes[i].quantity) * (menus[j].price));
            tableContent.innerHTML += `
                <tr>
                    <td>${menus[j].name}</td>
                    <td><i class="fa-solid fa-minus minus"></i><span class="quantity"> ${orderDishes[i].quantity} </span><i class="fa-solid fa-plus plus"></i></td>
                    <td>${menus[j].price}€</td>
                    <td class="totalPriceOfOneDishe">${totalPriceOfOneDishe}€</td>
                    <td><i class="fa-solid fa-trash-can trash"></i></td>
                </tr>
            `
            total += totalPriceOfOneDishe;
        }
    }
}
totalContent.textContent = `Total : ${Math.round(total * 100) / 100}€`;

let plusButtons = document.querySelectorAll(".plus");
let minusButtons = document.querySelectorAll(".minus");
let dishesQuantity = document.querySelectorAll(".quantity")
let totalPrice = document.querySelectorAll(".totalPriceOfOneDishe")

for (let i = 0; i < plusButtons.length; i++) {
    let dishesId = menus[i].id;

    plusButtons[i].addEventListener("click", () => {
        for (let j = 0; j < orderDishes.length; j++) {
            let quantity = orderDishes[i].quantity;
            if (orderDishes[j].id === dishesId) {
                orderDishes[i].quantity += 1;
                localStorage.setItem("orderDishes", JSON.stringify(orderDishes))
                dishesQuantity[i].innerHTML = (quantity + 1)
                totalPriceOfOneDishe = parseInt(orderDishes[i].quantity) * parseFloat(menus[i].price)
                totalPriceOfOneDishe = Math.round(totalPriceOfOneDishe * 100) / 100
                totalPrice[i].innerHTML = `${totalPriceOfOneDishe}€`
            }
        }
    })
}

for (let i = 0; i < minusButtons.length; i++) {
    let dishesId = menus[i].id;

    minusButtons[i].addEventListener("click", () => {
        for (let j = 0; j < orderDishes.length; j++) {
            let quantity = orderDishes[i].quantity;
            if (orderDishes[j].id === dishesId && orderDishes[i].quantity > 1) {
                orderDishes[i].quantity -= 1;
                localStorage.setItem("orderDishes", JSON.stringify(orderDishes))
                dishesQuantity[i].innerHTML = (quantity - 1)
                totalPriceOfOneDishe = parseInt(orderDishes[i].quantity) * parseFloat(menus[i].price)
                totalPriceOfOneDishe = Math.round(totalPriceOfOneDishe * 100) / 100
                totalPrice[i].innerHTML = `${totalPriceOfOneDishe}€`
            }
        }
    })
}
