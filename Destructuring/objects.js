let person={
    name:"Steve",
    country:"Los Angeles",
    job:"Avenger"
}

let name=person.name;
let country=person['country'];
let job=person.job;

console.log(name);
console.log(country);
console.log(job);


// *********************using destructuring*****************

let{name,country,job}=person;
console.log(name);
console.log(country);
console.log(job);

// undefined
let{name,country,job,anything}=person;
console.log(name);
console.log(country);
console.log(job);
console.log(anything); // this will print undefined because anything is not present in  person

// laiasing -> making name of our own keys and not using the default ones 
let{name:a,country:b,job:c}=person;
console.log(a);
console.log(b);
console.log(c);


// undefined && default values 
let{name:a,country="yo",job="no job", anything="default-value"} = person;
console.log(name);
console.log(country);
console.log(job);
console.log(anything);





