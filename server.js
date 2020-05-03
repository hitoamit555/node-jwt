require('dotenv').config()
const express = require('express')
//require('crypto').randomBytes(64).toString('hex')
const app = express()
const port = 3000
//const ESAPI = require('node-esapi')
//JWT changes below
const jwt = require('jsonwebtoken')
app.use(express.json())//let your app use json body pass to post call


app.get('/', (req, res) => res.send('Hello World!'))

/*
const posts = [ 
  {
    username: 'Jim',
    title: 'Post 1'
  },
  {
    username: 'Jim',
    title: 'Post 9'
  }
]

*/
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




app.get('/posts', (req, res) =>{
//console.log("inside post Name:"+req.user.name)
 res.json(posts.filter(post => post.username===req.user.name))
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
app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})
*/
function authenticateToken(req,resp,next){
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