
let user = {
    name:'Supak',
    nickname:'fah',
    hobby:'drawing',
    address:{
        province:'Bangkok',
        postcode:10510
}}

const getSentent = ({nickname,hobby,address:{postcode}}) => {
    return `My nickname is ${nickname}, My hobby is ${hobby} and my postcode is ${postcode}`
}

console.log(getSentent(user));
