// const strObject={
//     id:0,
//     name:"nihal",
//     place:"calicut"

// }

// const strJson=`{
//     "id":0,
//     "name":"nihal",
//     "place":"calicut"
// }`




// console.log(typeof strObject)

// console.log(typeof strJson)

//------------------------------------------------


const strObject={
    id:0,
    name:"nihal",
    place:"calicut"

}

const strJson=`{
    "id":0,
    "name":"nihal",
    "place":"calicut"
}`

const parseJson=JSON.parse(strJson)             //stringn object akkann


const stringifyObject=JSON.stringify(strObject)   //object string akkan

console.log(typeof stringifyObject)

console.log(typeof parseJson)

