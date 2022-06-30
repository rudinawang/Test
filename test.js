function helloWorld(){
    console.log("Hello World!!!");
}
helloWorld();
let a=15;
console.log("This is value of a:",a);

const d="Rudra";
console.log("This is my Name:",d);

const v=[1,2,3,4,5];
console.log("This is an Array:",v);

let f={name:"hari"};
console.log(`This is value of Object: ${f.name}`);

function hit(a,b){
    return a+b;
}


console.log("This is Sum of a and b:",hit(5,4));

function hut(){
    for(i=1;i<5;i++){
        console.log("Rudra");

    }
}

hut();

function got(){
    let i=1;
    while(i<=5){
        console.log("Hello!!");
        i++;
    }
}

got();

function tunk(){
    const a=3;
    const b=4;

    if(a>b)
    {
        console.log("This is greater:",a);
    }
    else{
        console.log("This is greater:",b);
    }
}
tunk();

function gang([a,b,...c]){
    console.log(a+b);
    console.log(c);
}

gang([1,2,3,4,5,6,7,8]);