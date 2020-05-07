require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

let refreshTokens = []

app.post('/token', (req, res) => {
  const refreshToken = req.body.token
  if (refreshToken == null) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: user.name })
    res.json({ accessToken: accessToken })
  })
})

app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

app.post('/login', (req, res) => {
  // Authenticate User

  const username = req.body.username
  const user = { name: username }

  const accessToken = generateAccessToken(user)
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
  refreshTokens.push(refreshToken)
  res.json({ accessToken: accessToken, refreshToken: refreshToken })
})

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' })
}


/// password crypto ways 

//https://www.youtube.com/watch?v=heldAl8Cfr4

const crypto = require('crypto');


// supported hashes
console.log(crypto.getHashes());
console.log(crypto.getCiphers());


// random bytes
crypto.randomBytes(16, (err, buf) => {
    //console.log(buf.toString('hex'));
});

let iv = crypto.randomBytes(16);


// create hash
let hash = crypto
    .createHash('sha1')
    .update('your message')
    .digest('hex');

console.log(hash);


// aes 256-bit cipher block chaining (cbc) encryption/decryption
let secret_message = ':)';
let key = '12345678123456781234567812345678';

let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
let encrypted = cipher.update(secret_message, 'utf-8', 'hex');
encrypted += cipher.final('hex');

console.log('encrypted: ' + encrypted)

let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');

console.log('decrypted: ' + decrypted)

///Salt
const pass ="password"
const bcrypt = require('bcrypt');
const salt =bcrypt.genSalt()
//const salt = await bcrypt.genSalt(10)
const hashedPassword=bcrypt.hash(pass,salt)
//or const hashedPassword=bcrypt.hash(pass,10)
bcrypt.compare(req.user,pass)

//if (await bcrypt.compare(req.user,pass) )


app.listen(4000)