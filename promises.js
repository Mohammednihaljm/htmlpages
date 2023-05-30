// const promise =new Promise((resolve, reject) => {
//     resolve("sucess")
// })
// promise.then((response)=>{
//     console.log(response)
// })
//--------------------
// const promise =new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("sucees")
//     }, 3000);
// })
// promise.then((response)=>{
//     console.log(response)
// })
//------------------------------
// const promise=new Promise((resolve, reject) => {
//     reject("failed")
// })
// promise
// .then((response)=>{
// console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// })
//------------------------------------
function addnumber(num){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(num)
    },3000);
})
}
function addnumber2(num){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(num)
    },3000);
})
}
addnumber(5).then(response=>{
    return addnumber2(response+5)
}).then(response=>{
    console.log(response)
})