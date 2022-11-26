const datefns = require('date-fns')

// console.log(datefns.format(new Date(),"MM/dd/yyyy"));

// console.log("Hello World");


// let fistName = "Supak",age = 22
// let info = `
//     My name is ${fistName}
//     My age is ${age}
// `;

// console.log(info);

let user = {
    name: "Supak",
    salary: 500000,
    address:{
        province:"Bangkok",
        postcode:10510
    }
}

const {name,salary,address:{postcode,province}} = user;
// console.log(postcode);

// console.log(user.salary);
// console.log(user.address.postcode);

// const showData = () => `${user.name}`
// console.log(showData());

// const showData2 = () => {
//     let info = 'My name is'
//     return `${info} ${user.name}`
// }

// console.log(showData2());

// const sumNumber = (a,b) => a+b;

// console.log(sumNumber(9,1));



