

var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function odds(){
    for(var i = 1; i <= 20; i++){
        var odds = [];
        if(i % 2 == 0){
            odds.push(i);
        }
        return odds
    }
}

console.log(odds());