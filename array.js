//#15 arrays
//1 create
//  const channelTopics=["htML","CSS","JAVASCRIPT","React","python"]


//  console.log(channelTopics.length)

 //2 get value from array
//  console.log(channelTopics[0])  //get value 
 


 //3 edit item
//  channelTopics[0]="HTML"
//  console.log(channelTopics)

 // 4 delte
//  delete channelTopics[0]

// 5 push & unshift
// channelTopics.push("ract js")
// channelTopics.unshift("base")

//6 pop & shift
// channelTopics.pop()
// channelTopics.shift()

//7 splice & slice 
// const channelTopics=["htML","CSS","JAVASCRIPT","React","python"]

// const splicearray=channelTopics.splice(2,1)

//  console.log("splice array",splicearray)

//----------------------
//  const splicearray=channelTopics.slice(1,3)

// console.log("splice array",splicearray)

//8 Array iteration -in, of,for,foreaach
// for (let topic of channelTopics){
//     console.log(topic)
// }
//----------------
// for(let i=0; i<channelTopics.length;i++){
//     console.log(channelTopics[i])
// }
//----------
// channelTopics.forEach(function(topic){
//     console.log(topic)
// })
//------------------
// channelTopics.map((value)=>{
//     console.log(value)
// })
//9 Destracture
// const employe=["nihal",23,1994]
// const[name,age,year]=employe
// console.log(year)
//10 spred operation
const array1=[1,2,3]
const array2=[4,5,6]
const spred=[...array1,...array2]
console.log(spred)