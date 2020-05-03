// npm i express dotenv jsonwebtoken

#dotenv for allow dotenv where we will keep the JWT tokens.

#NpdeNom for AutoRefresh and Restart if any changes into file 
// npm i --save-dev nodemon
//--dev for install dev dependancy
Do the script change into package.json keep below
"scripts": {
    "devStart": "nodemon server.js",
>npm run devStart
Do the changes into server.js console.log('Hi')
It will refresh and start automatic 


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
 
2 Diff ways Sign 
https://www.youtube.com/watch?v=oxmIB5MIJ2c

Signature build
https://www.youtube.com/watch?v=rCkDE2me_qk



Different useful Lib for node
"use strict"; -Make strict-mode/Secure/It as 
express // For route/rest WS application
dotenv //For read data/pass from .env file
nodemon // Auto restart when any change
crypto  // to gerate any encode number like Secrate
bcrypt.hash(pass,10)//User login password decript snd store into DB
10-how many times to gen radam no
passport /// For diff way login like facebook,gmail etc
ejs // create .ejs file that allow file to crate view and will Html code or Html files
async/wait  // make async function and use wait
Use async/wait
app.get('/login', async (req,resp)=>{ //async type method
const hashedPass=bcrypt.hash(pass,10)
})