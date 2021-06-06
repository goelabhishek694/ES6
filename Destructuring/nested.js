const user={
    id:00414802717,
    name:"Abhishek",
    age:23,
    education:{
        degree:"Masters",
        school:{
            name:"DPS",
            location:"New Delhi"
        }
    }
}

const {name}=user;
console.log(name);
// : colon is used to go inside object of another object
const{education:{degree}}=user;
console.log(degree);

const{education:{school:{location}}};
console.log(location);


