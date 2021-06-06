//used for mathemitcal operations like sum diffe avg mul divide etc. basically is converted into single value 

let arr=[1,2,3,4,5,6];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}

console.log(sum);




let sum=arr.reduce(function(acc,cval){

    return acc+cval; // sum ab tak + pointer on curr element 
});