

var btn = 2;
var connections = 500;

function changeName(){
    var profileName = document.querySelector("#profileName");
    profileName.innerText = "Ice";
}

function removeTop(imgTag){
    var removeTopRequest = document.querySelector("#topConnection");
    var buttonOne = document.querySelector(".buttonOne");
    removeTopRequest.remove();
    btn--;
    buttonOne.innerText = btn;
    if(imgTag.id == "firstAccept" || imgTag.id == "secondAccept"){
        connections++;
        var buttonTwo = document.querySelector(".buttonTwo");
        buttonTwo.innerText = connections;
    }

}


function removeBottom(imgTag){
    var removeBottomRequest = document.querySelector("#bottomRequest");
    var buttonOne = document.querySelector(".buttonOne");
    removeBottomRequest.remove();
    btn--;
    buttonOne.innerText = btn;
    if(imgTag.id == "firstAccept" || imgTag.id == "secondAccept"){
        connections++;
        var buttonTwo = document.querySelector(".buttonTwo");
        buttonTwo.innerText = connections;
    }
}


