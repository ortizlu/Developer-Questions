const express = require('express')
const parser = require('body-parser')
const app = express()
const Question = require('./db/models.js')

app.set('port', process.env.PORT || 3001)
app.use(parser.json())

app.get('/api/questions', (req, res) => {
  Question.find()
  .then((questions) => {
    res.json(questions)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.post('/api/questions', (req, res) => {
  Question.create(req.body)
    .then((question) => {
      res.json(question)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/api/questions/:id', (req, res) => {
  Question.findById(req.params.id)
    .then((question) => {
      res.json(question)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.put('/api/questions/:id', (req, res) => {
  Question.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedQuestion) => {
      res.json(updatedQuestion)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
