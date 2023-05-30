// function a(callback){
//     console.log("inside function a")
//     callback()
// }
// function b(){
//     console.log("inside function b")
// }
// a(b)



    // function umpirerview(is){
    // console.log(`review:${is}`)

    // }
    // umpirerview("out")

    // function thirdumpiredecion(decition){
    // console.log(`third umpire decicion is:${decition}`)
    // }
    // thirdumpiredecion("notout")


    
    // function dec(){
    //     console.log("dec")
    // }
    // dec()
    
    // const exp=function(){
    //     console.log("exp")
    // }
    // exp()



    //call back function------------------

    // for (let index = 0; index <10; index++) {
    //     console.log(index);
        
    // }
    // console.log("running 2")
    // console.log("running 3")

      //-----------                             //stck que web api

    // console.log("running 1")       //synchornes
    // setTimeout(() => {
    //     console.log("running 2")    //asychorness
    // }, 5000);
    // console.log("running 3")
 //-------------------

//  console.log("start")
//  function getdatafromapi(){
//    setTimeout(() => {
//     return"nihal"
//    },3000);
//  }
//  console.log(getdatafromapi())
//  console.log("end")
//====================callback solution
// console.log("start")
// function getdatafromapi(callback){
//     setTimeout(() => {
//         callback("nihal")
//     }, 3000);
// }
// getdatafromapi((value)=>{
//     console.log(value);
// })
// console.log("end")
//----------------------------
console.log("start")
function getdatafromapi(callback){
    setTimeout(() => {
        callback(5)
    }, 1000);
}
function getdatafromapi2(callback){
    setTimeout(() => {
        callback(5)
    }, 1000);
}
function getdatafromapi3(callback){
    setTimeout(() => {
        callback(5)
    }, 1000);
}
getdatafromapi((value)=>{
   getdatafromapi2((api2val)=>{
    getdatafromapi3((api3val)=>{
        console.log(api2val+api3val+value)
    })
   })
})
console.log("end")