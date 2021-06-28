var likes = [9, 12, 9];
var likes1 = document.querySelector("#likes1");
var likes2 = document.querySelector("#likes2");
var likes3 = document.querySelector("#likes3");

function addFirst(){
    likes[0]++;
    likes1.innerText = likes[0] + "likes(s)";
}

function addSecond(){
    likes[1]++;
    likes2.innerText = likes[1] + "likes(s)";
}

function addThird(){
    likes[2]++;
    likes3.innerText = likes[2] + "likes(s)";
}