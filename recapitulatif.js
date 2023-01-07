import { menus } from "./data/data.js";
let orderDishes = JSON.parse(localStorage.getItem("orderDishes"));
let tableContent = document.querySelector("tbody");
let totalPriceOfOneDishe;
let totalContent = document.querySelector("#total");
let total = 0;

function display() {
    tableContent.innerHTML = ``
    for (let i = 0; i < orderDishes.length; i++) {
        let dishId = orderDishes[i].id;
        for (let j = 0; j < menus.length; j++) {
            if (dishId === menus[j].id) {
                totalPriceOfOneDishe = parseFloat((orderDishes[i].quantity) * (menus[j].price));
                tableContent.innerHTML += `
                    <tr>
                        <td>${menus[j].name}</td>
                        <td><i class="fa-solid fa-minus minus ${menus[j].id}"></i><span class="quantity"> ${orderDishes[i].quantity} </span><i class="fa-solid fa-plus plus"></i></td>
                        <td>${menus[j].price}€</td>
                        <td class="totalPriceOfOneDishe">${totalPriceOfOneDishe}€</td>
                        <td><i class="fa-solid fa-trash-can trash" id=${menus[j].id}></i></td>
                    </tr>
                `
                total += totalPriceOfOneDishe;
            }
        }
    }
}
display();
totalContent.textContent = `Total : ${Math.round(total * 100) / 100}€`;

let plusButtons = document.querySelectorAll(".plus");
let minusButtons = document.querySelectorAll(".minus");
let trashButtons = document.querySelectorAll(".trash");
let dishesQuantity = document.querySelectorAll(".quantity")
let totalPrice = document.querySelectorAll(".totalPriceOfOneDishe")

for (let i = 0; i < trashButtons.length; i++) {
    trashButtons[i].addEventListener("click", () => {
        console.log(trashButtons[i].id)
        for (let j = 0; j < orderDishes.length; j++) {
            console.log(orderDishes[j].id)
            if (trashButtons[i].id == orderDishes[j].id) {
                // total -= parseFloat(menus[i].price * orderDishes[j].quantity);
                // totalContent.textContent = `Total : ${Math.round(total * 100) / 100}€`;
                orderDishes.splice(j, 1)
                localStorage.setItem("orderDishes", JSON.stringify(orderDishes))
                location.reload()
            }
        }
    })

    plusButtons[i].addEventListener("click", () => {
        console.log(trashButtons[i].id)
        for (let j = 0; j < orderDishes.length; j++) {
            let quantity = orderDishes[j].quantity;

            if (orderDishes[j].id == trashButtons[i].id) {
                console.log("coucou")
                orderDishes[j].quantity += 1;
                localStorage.setItem("orderDishes", JSON.stringify(orderDishes))
                dishesQuantity[i].innerHTML = (quantity + 1)
                totalPriceOfOneDishe = parseInt(orderDishes[i].quantity) * parseFloat(menus[i].price)
                totalPriceOfOneDishe = Math.round(totalPriceOfOneDishe * 100) / 100
                totalPrice[i].innerHTML = `${totalPriceOfOneDishe}€`

                total += parseFloat(menus[i].price);
                totalContent.textContent = `Total : ${Math.round(total * 100) / 100}€`;
            }
        }
    })

    minusButtons[i].addEventListener("click", () => {
        for (let j = 0; j < orderDishes.length; j++) {
            let quantity = orderDishes[j].quantity;
            if (orderDishes[j].id == trashButtons[i].id && orderDishes[j].quantity > 1) {
                orderDishes[j].quantity -= 1;
                localStorage.setItem("orderDishes", JSON.stringify(orderDishes))
                dishesQuantity[i].innerHTML = (quantity - 1)
                totalPriceOfOneDishe = parseInt(orderDishes[i].quantity) * parseFloat(menus[i].price)
                totalPriceOfOneDishe = Math.round(totalPriceOfOneDishe * 100) / 100
                totalPrice[i].innerHTML = `${totalPriceOfOneDishe}€`

                total -= parseFloat(menus[i].price);
                totalContent.textContent = `Total : ${Math.round(total * 100) / 100}€`;
            }
        }
    })
}

