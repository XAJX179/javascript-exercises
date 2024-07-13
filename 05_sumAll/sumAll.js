const sumAll = function(number1,number2) {
    if(typeof number1 !== 'number' || typeof number2 !== 'number'){
        return 'ERROR'
    }
    let sum = 0;
    if(number1 >= number2 && number2 >= 0){
        for(let i = number2;i <= number1;i++){
            sum += i
        }
        return sum
    }
    else if(number2 >= number1 && number1 >= 0){
        for(let i = number1;i <= number2;i++){
            sum += i
        }
        return sum
    }
    else{
        return 'ERROR';
    }
};
// Do not edit below this line
module.exports = sumAll;
