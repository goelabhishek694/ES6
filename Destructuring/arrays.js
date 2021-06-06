let intro=['hello','i','am','Abhishek'];

let [greeting,pronoun,variable,name]=intro;

console.log(greeting,pronoun,variable,name);


// skiping values 

let[greetings,pronoun,,name]=intro;
console.log(greeting,pronoun,name);


let arr=["Howdy"];

let[ab,cd,ef]=arr;
console.log(ab,cd,ef); // howdy undefined undefined

// this gives default value in case the value in varibale is undefined
console.log(ab='hello',cd='bye',ef='say');

// swap 2 number w/o using aother varibale
let a=3;
let b=6;
[a,b]=[b,a];
console.log(a,b);
