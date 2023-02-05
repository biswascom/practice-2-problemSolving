function positiveNumber(array){
    let positive = [];
    for(let i = 0; i < array.length; i++){
        const number = array[i];
        if(number >= 0){
            positive.push(number);
        }
        else{
            break;
        }
    }
    return positive;
    
}

let array = [12, 22, 34, 54, 33, 77, 909, 56, 87, 0, 45, -11, -44, 87, 90];

const result = positiveNumber(array);
console.log(result);