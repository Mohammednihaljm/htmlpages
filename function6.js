// function message(name){
// console.log(`hello ${name}`)
// }
// message("nihal")
//----------------------------normal function
// function myfunction(p1,p2){
//  console.log(p1*p2) 
// }
// myfunction(4,12)
//---------------anonymous functio
// const hello=function(){
//     console.log("hai");
// }
// hello()
//---------------arrow functio
// const message=()=>{
// console.log("hello mohammed")
// }
// message()
//--------------iife(immidiate invoked function execte)
// (function(){
// let str=("good morning nihal")
// console.log(str)
// })()
//---------------------higher order function --function can take one or more function as arguments

let number=[10,20,30]
let multiple=number.map((element)=>element*10)
console.log(multiple)