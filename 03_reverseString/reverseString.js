const reverseString = function(string) {
    const stringArray = string.split('');
    let length = string.length

    let reversedString='';
    for(let i=length-1;i>=0;i--){
        reversedString += stringArray[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
