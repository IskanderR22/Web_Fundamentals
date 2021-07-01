var likes = [9, 12, 9];
var likes1 = document.querySelector("#likes1");
var likes2 = document.querySelector("#likes2");
var likes3 = document.querySelector("#likes3");
var elements = [likes1, likes2, likes3];

function addFirst(num){
    likes[num]++;
    elements[num].innerText = likes[num] + "likes(s)";
}