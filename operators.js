let a =10;
let b=3;
console.log(a/b);
console.log(a%b);

//Postfix Incriment
let p=2;
let q=p++;
console.log('p='+p);
console.log('q='+q);

//Prefix Incriment
let m=2;
let n=++m;
console.log('m='+m);
console.log('n='+n);

let arrFruits=["apple","orange","grapes"];

let i=0;

while(i<arrFruits.length)
{
    console.log(arrFruits[i]);
    i++;
}

let j=0;
do{
    console.log(arrFruits[j]);
    j++;
}while(j<arrFruits.length);