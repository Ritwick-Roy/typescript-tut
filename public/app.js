import { Invoice } from './models/Invoice.js';
import { Payment } from './models/Payment.js';
import { ListTemplate } from './models/ListTemplate.js';
// let docOne:HasFormatter;
// let docTwo:HasFormatter;
// docOne=new Invoice('yoshi','web work',250);
// docTwo=new Payment('mario','plumbing work',200);
// let docs: HasFormatter[]=[];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// //interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: IsPerson = {
//     name: 'mario',
//     age: 20,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         return amount;
//     },
// };
// let someone: IsPerson;
// const anchor = document.querySelector('a')!;
// //method 1
// // if(anchor)
// // console.log(anchor.href);
// //method 2 - !
// console.log(anchor.href);
// const invOne = new Invoice('mario', 'work on the mario website', 200);
// const invTwo = new Invoice('luigi', 'work on the mario website', 300);
// // console.log(invOne.format(),invTwo.format());
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//     console.log(inv.format());
// })
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice')
        doc = new Invoice(...values);
    else
        doc = new Payment(...values);
    list.render(doc, type.value, 'end');
});
//generics
//block 1
// const addUID = (obj:object)=>{
//     let uid=Math.floor(Math.random()*100);
//     return {...obj,uid};
// }
//block 2
// const addUID = <T>(obj:T)=>{
//     let uid=Math.floor(Math.random()*100);
//     return {...obj,uid};
// }
// //block 3
// const addUID = <T extends {name:string,age:number}>(obj:T)=>{
//     let uid=Math.floor(Math.random()*100);
//     return {...obj,uid};
// }
// let docOne = addUID({name:'yoshi',age:40});
// // let docTwo = addUID('hello'); //allowed with block, 2 error with 3
// console.log(docOne.name) //error with block 1
// //with interfaces
// // ENUMS
// enum ResourceType {BOOK,AUTHOR,FILM,DIRECTOR,PERSON};
// //numbers from 0 are assigned
// interface Resource<T>{
//     uid:number,
//     resourceName:ResourceType,
//     data:T
// }
// const docThree:Resource<string>={
//     uid:1,
//     resourceName:ResourceType.PERSON,
//     data:'mario'
// }
// const docFour:Resource<string[]>={
//     uid:1,
//     resourceName:ResourceType.AUTHOR,
//     data:['apple','orange']
// }
// console.log(docThree,docFour);
// //tuples
// let arr=['ryu',25,true];
// arr[0]=false;
// arr[1]='yoshi';
// let tup:[string,number,boolean]=['ryu',25,true];
// tup[0]='mario';
// // tup[0]=2 //error
// let student:[string,number];
// student=['ken',10201];
