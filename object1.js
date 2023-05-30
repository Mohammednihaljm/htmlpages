// let employeedata={
//     employeName:"nihal",
//     employeAge:28,
//     employeQulification:"bsccs",
//     employeLanguge:["html","cs","bootstarp"],
//     employeMessage:function(){
//      console.log("hai")
//     }
// }



// console.log(employeedata)

//1.iteratio
// for(let key in employeedata){
//     console.log(employeedata[key])
// }
//2.get only keys
// console.log(Object.keys(employeedata))
//3.get only valuues
// console.log(Object.values(employeedata))
//4.get key & values
// console.log(Object.entries(employeedata))
// 5.objec refering
// let employeedata={
//     employeName:"nihal",
//     employeAge:28,
//     employeQulification:"bsccs",
//     employeLanguge:["html","cs","bootstarp"],
//     employeMessage:function(){
//      console.log("hai")
//     }
// }
// let employeedatacopy=employeedata
// employeedata.employeAge=29
// console.log("employeedata",employeedata)
// console.log("employeedatacopy",employeedatacopy)

//6.copy object
// let employeedatacopy=Object.assign(employeedata)
// console.log("employeedata",employeedata)
// console.log("employeedatacopy",employeedatacopy)

 
//7.freeze
// let userLogin={
//     userName:"nihal",
//     password:"2345678web"
// }
// Object.freeze(userLogin)
// let loginhacked=Object.assign(userLogin)
// userLogin.password="fgh23456"
// console.log("userLogin",userLogin)
// console.log("loginhacked",loginhacked)
  

//8.object with const

// const employeedata={
//         employeName:"nihal",
//         employeAge:28,
//         employeQulification:"bsccs",
//         employeLanguge:["html","cs","bootstarp"],
//           employeMessage:function(){
//           console.log("hai")
//          }
//         }

//     employeedata.employeAge=29
//     console.log(employeedata)    

// employeedata=null   //full object not change for const



//9.spread operator     using object,array,function

// const employedata={
//     name:"nihal",
//     age:25
// }
// const employesecurity={
//     loginid:"eerty",
//     password:"ewrty6"
// }
// const fulldetails={...employedata,...employesecurity}
// console.log(fulldetails)


//10.nested object

const employeedata={
    employeName:"nihal",
    employeAge:28,
    employeQulification:"bsccs",
    employeLanguge:["html","cs","bootstarp"],
    employeMessage:function(){
     console.log("hai")
    },
    emploeeloginid:{
        password:"fgytrer",
        email:"gfjhfdwg"
    }
}
console.log(employeedata)