"use  strict"
const express = require('express')
//require('crypto').randomBytes(64).toString('hex')
const app = express()
const port = 3000
//const ESAPI = require('node-esapi')
//JWT changes below
const jwt = require('jsonwebtoken')
app.use(express.json())//let your app use json body pass to post call
require('dotenv').config()

app.get('/', (req, res) => res.send('Hello World!'))
/*
const posts = [ 
  {
    username: 'Amit',
    title: 'Post'
  },
  {
    username: 'Kumar',
    title: 'Post 1'
  }
]*/

const users = [ 
  {
    username: 'Amit',
    title: 'JWT 1'
  },
  {
    username: 'Kumar',
    title: 'JWT 2'
  }
]



/*
const posts = [
  {
    username: 'Kyle',
    title: 'Post 1'
  },
  {
    username: 'Jim',
    title: 'Post 2'
  }
]
*/
/*
const posts = [
  {
    username: 'Kyle',
    title: 'Post 1'
  },
  {
    username: 'Jim',
    title: 'Post 2'
  }
]
*/

app.get('/posts',authenticateToken, (req, res) =>{
console.log("User Name:"+req.user.name)
 res.json(users.filter(user => user.username===req.user.name))
})
/*
app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})*/


app.post('/login' ,(req, res) =>{
//Authenticate Users
const username=req.body.username
const user={name:username}
const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
res.json({accessToken:accessToken}) 
//  res.json(data))
})

/*
function authenticationToken(req,resp,next){
  const authHeader=req.headers['authorization']
  const token=authHeader && authHeader.split(' ')[1]
  if(token == null) return resp.sendStatus(401)

  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
    console.log(err)
    if(err) return resp.sendStatus(403)
    req.user = user
    next()

  })
}
*/
/*
const posts = [
  {
    username: 'Kyle',
    title: 'Post 1'
  },
  {
    username: 'Jim',
    title: 'Post 2'
  }
]
*/
/*
app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})
*/
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




/*
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    //console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}
*/







console.log('Hi')
var abc='amit kumar jee'
app.listen(port, () => console.log(`Example app listening   at http://localhost:${port}`))