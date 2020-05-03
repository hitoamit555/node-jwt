
const crypto = require('crypto')

const base64Url = require('base64-url')
const secrate=process.env.ACCESS_TOKEN_SECRET
/*const contant='${Header}.${Payload}'

//Genrate Header 
const header=base64Url.encode(
  JSON.stringify({
    algo:'HS256'})
)

// Genrate Payload
const paylod=base64Url.encode(
  JSON.stringify({
    subid:'123',user:'ABC',admin:'true'})
)


//Genrate Signature
const signature = base64Url.escape(
  crypto.createHmac('sha256',secrate).update(contant).digest('base64'))
*/
//Genrate secrate 
const jwt = require('jsonwebtoken')
const secrateTest='password'//Secrate Must be encoded 
//password that has to pass into www.jwt.io to validate 
//And same password pass to client side to get the Service

var payload={name: 'Foo'}
var token=jwt.sign(payload,secrateTest)
console.log(token)


console.log('hibb ')
