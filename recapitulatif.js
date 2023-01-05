import { menus } from "./data/data.js";
let orderDishes = JSON.parse(localStorage.getItem("orderDishes"));
let tableContent = document.querySelector("tbody");
let totalPriceOfOneDishe;
let plusButtons = document.querySelectorAll(".plus");
let minusButtons = document.querySelectorAll(".minus");
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
                    <td><i class="fa-solid fa-minus minus"></i><span> ${orderDishes[i].quantity} </span><i class="fa-solid fa-plus plus"></i></td>
                    <td>${menus[j].price}€</td>
                    <td>${totalPriceOfOneDishe}€</td>
                    <td><i class="fa-solid fa-trash-can trash"></i></td>
                </tr>
            `
            total += totalPriceOfOneDishe;
        }
    }
}
totalContent.textContent = `Total : ${Math.round(total * 100) / 100}€`;