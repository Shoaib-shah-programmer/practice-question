
 // question 1

let price = 250;

let btn1 = document.getElementById("calculate");

btn1.addEventListener("click", function () {

    let quantity = document.getElementById("quantity").value;
    let result1 = document.getElementById("result1");

    if (quantity === "") {
        result1.innerHTML = "Please enter quantity";
        return;
    }

    quantity = Number(quantity);

    if (quantity <= 0) {
        result1.innerHTML = "Quantity must be greater than zero";
        return;
    }

    let total = price * quantity;
    let discount = 0;
    let finalBill = total;

    if (total >= 1000) {
        discount = total * 0.10;
        finalBill = total - discount;
    }

    result1.innerHTML = "Final Bill: Rs. " + finalBill;

    console.log("Total Bill: Rs. " + total);
    console.log("Discount: Rs. " + discount);
    console.log("Final Bill: Rs. " + finalBill);

});


// question 2

let btn2 = document.getElementById("generate");
let result2 = document.getElementById("result2");

btn2.addEventListener("click", function () {

    let number = Math.floor(Math.random() * 100) + 1;

    if (number > 50) {
        result2.innerHTML = number + " - High Number";
    } else {
        result2.innerHTML = number + " - Low Number";
    }

});


// question 3

let btn3 = document.getElementById('btn');

btn3.addEventListener("click", function(){

    let marks = Number(document.getElementById("marks").value);
    let result3 = document.getElementById("result3");

    if(marks === ""){
        result3.innerHTML = "please enter your marks";
    } else if(marks >= 80){
        result3.innerHTML = "excelent";
    } else if(marks >= 60){
        result3.innerHTML = "good";
    } else if(marks >= 40){
        result3.innerHTML = "pass";
    } else if(marks < 40){
        result3.innerHTML = "fail";
    }

});
