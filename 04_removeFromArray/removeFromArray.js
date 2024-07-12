const removeFromArray = function(Arr,...args) {
for(arg of args)
   {
    while(Arr.indexOf(arg) > -1){
        let index = Arr.indexOf(arg);
        Arr.splice(index,1);
    }
   }
return Arr; 
};
// Do not edit below this line
module.exports = removeFromArray;
