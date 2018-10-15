const mongoose = require('./connection.js')

const QuestionSchema = new mongoose.Schema ({
  question: String,
  answer: String
})

module.exports= mongoose.model("Question", QuestionSchema)