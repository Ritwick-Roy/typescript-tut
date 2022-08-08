const input=document.querySelectorAll('input')
let age=30;
console.log(age);
age=1;

const circ= (diameter:number)=>{
    return diameter*Math.PI;
}
console.log(circ(1));

//arrays
let names=['luigi','mario','yoshi']
names.push('bowser');  //same type

let numbers=[10,30,20];
// numbers.push('2'); //error
numbers.push(12); 

let mixed=[2,'2'];
mixed.push('3');
mixed.push(3);
// mixed.push(true); //error again

//objects

let ninja={
    name:'mario',
    belt:'black',
    age:30
}

ninja.age=40;
ninja.name='ryu'
// ninja.age='30' //error

// ninja.skills=['fighting','sneaking'] //cant add more to object

ninja = {
    name:'yoshi',
    belt:'orange',
    age:40  //on removing this, error
}

//explicit types

let character: string;
let years:number;
let loggedIn:boolean;

//arrays
let ninjas: string[]=[];
ninjas.push('bowser');

//union types
let mixedArray: (string|number)[]=[];
mixedArray.push(10);
mixedArray.push('10');
// mixedArray.push(true); //error

let uid:string|number;
uid='3';
uid=3;
// uid=true; //error

//objects
let ninjaOne:object;
ninjaOne={
    name:'yoshi',
    age:30,
}

ninjaOne=[]
// ninjaOne='s' //error

let ninjaTwo:{
    name:string,
    age:number,
    beltColor:string,
}

ninjaTwo={
    name:'mario',
    age:20,
    beltColor:'black'
}

//dynamic types
 
let ageDynamic:any=25;  //rarely used tho
ageDynamic=true;

let mixedDynamic:any[]=[];

mixedDynamic.push(5);
mixedDynamic.push('5');
mixedDynamic.push(true);

let ninjaDynamic:{name:any,age:any};

//functions

let greet: Function;

// greet='hello'
greet = () =>{
    console.log('hello');
}


const add= (a:number,b:number,c:number|string=10) =>{
    console.log(a+b);
}

add(10,5);

const minus = (a:number,b:number): number =>{
    return a-b;
}

let result=minus(10,3);
// result='1' //error


//type-aliases
type StringOrNum=string|number;
type objWithName = {name:string,uid:StringOrNum};

const greetAgain = (user:objWithName)=>{
    console.log(`${user.name} says hello`);
}

const greetYetAgain = (user:objWithName)=>{
    console.log(`${user.name} says hello`);
}
//removes code duplication

//function signatures

let gree:(a:string,b:string) => void;
gree = (name:string,greeting:string)=>{
    console.log(`${name} says ${greeting}`);
}

let calc:(a:number,b:number,c:string)=>number;  //kinda like protoype
calc=(a:number,b:number,c:string)=>{          //actual declaration
    if(c==='add')
    return a+b;
    else if(c=='subtract')
    return a-b;
    else if(c=='mult')
    return a*b;
    return a/b;
}
console.log(calc(20,4,'/'));
type person={name:string,age:number};
let logDetails:(obj:{name:string,age:number})=>void;
logDetails =(ninja:person)=>{
    console.log(`${ninja.name} is ${ninja.age} years old`);
}

