const express = require('express')
const app = express()
const port = 4000

let userName = ['Bob', 'Jack', 'Kate', 'Alex']

app.get('/users', (req, res) => {
  res.send(userName)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

