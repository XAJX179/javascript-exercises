const repeatString = function(string, numberOfRepeat) {
    
    if(numberOfRepeat < 0){return 'ERROR'}

    let repeatString ='';
    for(let i =0;i<numberOfRepeat;i++){
        repeatString += string;
    }
    
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
