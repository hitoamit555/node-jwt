"use strict";
const express = require('express')
//require('crypto').randomBytes(64).toString('hex')
const app = express()
const port = 3000

//JWT changes below
const jwt = require('jsonwebtoken')
app.use(express.json())//let your app use json body pass to post call
require('dotenv').config()



app.post('/login' ,(req, res) =>{
  //Authenticate Users
const username=req.body.username
const user={name:username}
const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
//JWT.verify(JAVA_JWT, SECRET, { algorithms: ['HS512'] })
res.json({accessToken:accessToken}) 
//  res.json(data))
})


const usersList = [ 
  {
    username: 'Amit',
    title: 'JWT title1'
  },
  {
    username: 'Kumar',
    title: 'JWT title2'
  }
]

app.get('/posts',authenticateToken, (req, res) =>{
console.log("User Name for this token:"+req.user.name)
//print match user data only fron Static list/DB
 res.json(usersList.filter(usr => usr.username===req.user.name))
})




function authenticateToken(req,resp,next){
  const authHeader=req.headers['authorization']
  const token=authHeader && authHeader.split(' ')[1]
  if(token == null) return resp.sendStatus(401)

  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
    console.log('Error from AuthValidation: '+err)
    if(err) {
    return resp.sendStatus(403)
  }
    req.user = user
    next()

  })
}

app.listen(port, () => console.log(`Example app listening   at http://localhost:${port}`))