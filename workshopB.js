const users = [
    {
        name: 'Supak',
        nickname: 'fah',
        hobby: 'drawing',
        address: {
            province: 'Bangkok',
            postcode: 10510
        }
    },
    {
        name: 'Supik',
        nickname: 'fonn',
        hobby: 'sleep',
        address: {
            province: 'Bangkok',
            postcode: 10511
        }
    },
    {
        name: 'Supek',
        nickname: 'rom',
        hobby: 'eat',
        address: {
            province: 'Bangkok',
            postcode: 10512
        }
    },
]



for (const u of users) {
    console.log(`My nickname is ${u.nickname}, My hobby is ${u.hobby} and my postcode is ${u.address.postcode}`)
}