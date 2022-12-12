const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/book', (req, res) => {
  res.send('Book World!')
})
app.get('/book/:id', (req, res) => {
  res.send(`single book! id: ${req.params.id}`)
})
app.post('/post-method', (req, res) => {
  res.json({data: 'Hey post'});
})
app.all('/*',(req, res) =>{
  res.send(`404 page not found`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})