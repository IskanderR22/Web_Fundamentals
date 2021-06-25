




var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];


for(var i = 0; i < 7; i++){
    if(numbers[i] >= 0){
        countPositives += 1;
    }


}

console.log("there are " + countPositives + " positive values");



// REVERSE AN ARRAY
// CREATE A FUNCTION WHERE GIVEN AN ARRAY YOU REVERSE THE ARRAY AND RETURN THE ARRAY
// ["a", "b", "c", "d", "e"] => ["e", "d", "c", "b", "a"]

// CREATE A FUNCTION WRAPPER (1 param / array type)
// ITERATE THROUGHT ARRAY (FOR LOOP)
// NEED A TEMP VARIABLE TO STORE A VALUE
// SWAP THE VALUES WITHIN THE ARRAY
// RETURN THE ARRAY

var array = ["a", "b", "c", "d", "e"];


function ReversePro(array){
        var temp;
    var last = array.length - 1;
    for(var i = 0; i < array.length/2; i++){
        temp = array[i];
        array[i] = array[last];
        array[last] = temp;
        --last;
    }
    return array;
}
