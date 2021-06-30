
function alertCustomer(){
    alert("Your cart is empty!");
}

function removeCookie(){
    var cookie = document.querySelector(".cookieBar")
    cookie.remove();
}


function over(element){
    var image = document.querySelector(".mainPicture");
    image.src = "images/assets/succulents-2.jpg"
}

function out(){
    var image = document.querySelector(".mainPicture");
    image.src = "images/assets/succulents-1.jpg"
}