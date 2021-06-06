let words=['spray','limit','elited','destruction'];

let nwords=[];

for(let i=0;i<words.length;i++){
    if(words[i].length>5){
        nwords.push(words[i]);
    }
}

let nwords=words.filter(function(e1){
    //true false
    return e1.length>5;
});

console.log(nwords);