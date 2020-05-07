###How to Start App###
Go to package.json inside script- devStart (file name pointing ) and use cmd below
// Install all package in new system : npm install 
//npm run devStart(it will auto pick file ) Or
/node server.js


Note : while commit into git ignore .env  ,Delete the node_modues folders and ignore or commit package-lock.json(make sure other user use same version of all lib to avoid conflict verson)

// npm i express dotenv jsonwebtoken

#dotenv for allow dotenv where we will keep the JWT tokens.

#NpdeNom for AutoRefresh and Restart if any changes into file 
// npm i --save-dev nodemon
//--dev for install dev dependancy
Do the script change into package.json keep below
package.json
~~~
"scripts": {
    "devStart": "nodemon server.js",
~~~
>npm run devStart
Do the changes into server.js console.log('Hi')
It will refresh and start automatic 

#RefreshToken Use for More secure
When we have access token have expiry time then will use Refreshtoken to genrate the new token 
When we login will get the Access token and refresh token both 

#Goto extension (left side square box) search -> install "RestClient"
create request.rest file and keep below
GET http://localhost:3000 
And click send reequest above to GET line

#JWT genration
Got to terminal type >node
>require('crypto').randomBytes(64).toString('hex')
You will get the token 


Error 
Error: secretOrPrivateKey must have a value: 
must add import for dotenv for load from .env file

TODO: Passport

Referance :

Errot check JWT imp
https://github.com/auth0/node-jsonwebtoken/issues/208

JWT
https://www.youtube.com/watch?v=mbsmsi7l3r4

https://github.com/WebDevSimplified/JWT-Authentication

User Auth
https://www.youtube.com/watch?v=Ud5xKCYQTjM


crypto password 
https://www.youtube.com/watch?v=heldAl8Cfr4


Permission
https://www.youtube.com/watch?v=jI4K7L-LI58

https://github.com/WebDevSimplified/nodejs-user-permissions

User Auth
https://www.youtube.com/watch?v=Ud5xKCYQTjM

Passport Login:FB /UI login App
https://www.youtube.com/watch?v=-RCnNyD0L-s

 
2 Diff ways Sign 
https://www.youtube.com/watch?v=oxmIB5MIJ2c

Signature build
https://www.youtube.com/watch?v=rCkDE2me_qk



###Different useful Lib for node###
"use strict"; -Make strict-mode/Secure/It as 
express // For route/rest WS application
dotenv //For read data/pass from .env file
nodemon // Auto restart when any change
jsonwebtoken// For JWT sign(genrate)/veryfy(vaidate)
crypto  // to gerate any encode number like Secrate
bcrypt.hash(pass,10)//User login password decript snd store into DB
10-how many times to gen radam no
passport /// For diff way login like facebook,gmail etc
ejs // create .ejs file that allow file to crate view and will Html code or Html files
async  // make async function and use wait
//await when use async method
Use async/await/salt/hash
~~~
app.get('/login', async (req,resp)=>{ //async type method
const hashedPass=await bcrypt.hash(pass,10)//thisstore into DB
//Or 
const salt=bcrypt.genSalt(10)//empty insted of 10
const hashedPass=bcrypt.hash(pass,10)

//salt //Add some no into hashPass (if keep only hash ////then multi pass can have same hash no so addsomeNo) 
//ie RandomNo+HashPass=SaltHashPass

})
~~~