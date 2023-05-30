// console.log("1.review requsted")
//  let upmiredecicion;
//  const TIMEOUT=10000;

// function thirdumpireresult(callback){
//     console.log("2.review started")
//     console.log("3.review camera")
//     setTimeout(() => {
//         upmiredecicion="OUT"
//         console.log(`4.THIRD UPMPIRE RESULT ${upmiredecicion}`)
//         callback()
//     },TIMEOUT);
    
// }


// function displaythirdumpireResult(callback){
//     console.log(`5.screen ${upmiredecicion} finished`)
//     callback()
// }

// function passintogroundumpire(callback){
//     console.log("6.hey ground umpire please your decision")
//     callback()
// }

// function matchcontinue(){
//     console.log("7.match start")
// }

// thirdumpireresult(function(){
//     displaythirdumpireResult(function(){
//         passintogroundumpire(function(){
//             matchcontinue()
//         })
//     })
// })

  
//--------------------------------PROMISE

// console.log("1.review requsted")
//  let upmiredecicion;
//  const TIMEOUT=10000;

// function thirdumpireresult(){
//     console.log("2.review started")
//     console.log("3.review camera")
   
     
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(upmiredecicion="OUT")
//             console.log(`4.THIRD UPMPIRE RESULT ${upmiredecicion}`)
//         },TIMEOUT);
//     })
// }


// function displaythirdumpireResult(){
//     console.log(`5.screen ${upmiredecicion} finished`)
    
// }

// function passintogroundumpire(){
//     console.log("6.hey ground umpire please your decision")
// }

// function matchcontinue(){
//     console.log("7.match start")
// }

// function showerror(){
//     console.log("sorry")
// }

//  thirdumpireresult()
//   .then(displaythirdumpireResult)
//   .then(passintogroundumpire)
//   .finally(matchcontinue)
//   .catch(showerror)
  

//----------------------------------------------------asyn await
console.log("1.review requsted")
 let upmiredecicion;
 const TIMEOUT=10000;

function thirdumpireresult(){
    console.log("2.review started")
    console.log("3.review camera")
   
     
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(upmiredecicion="OUT")
            console.log(`4.THIRD UPMPIRE RESULT ${upmiredecicion}`)
        },TIMEOUT);
    })
}


function displaythirdumpireResult(){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(upmiredecicion="OUT")
            console.log(`5.screen ${upmiredecicion} finished`)
        },TIMEOUT);
    })
}                                                        




function passintogroundumpire(){
    console.log("6.hey ground umpire please your decision")
}

function matchcontinue(){
    console.log("7.match start")
}

function showerror(err){
    console.log("sorry")
}


async function total(){
  
    try {
        
    await  thirdumpireresult()
    await displaythirdumpireResult()
    await passintogroundumpire()
    await matchcontinue()
        
    } catch (error) {
        showerror(err)  
    }

}

total()


