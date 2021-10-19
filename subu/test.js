
/////////////

const reducedataarr = [0,1,2,3,4,5,6];

let result  = reducedataarr.reduce((accumulator,currentValue,index,array)=>{
    return accumulator+currentValue;
},initialVal=0);

console.log(result);

Array.prototype.myReduce = function (callBack,initialValue){
    console.log(initialValue);
    
    callBack(accumulator = 0,this[index + 1],index,this)
}

let result2 = reducedataarr.myReduce(
    (accumulator,currentValue,index,array)=>
    {
        console.log(array);
    },initialVal=0
);