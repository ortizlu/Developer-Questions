const Question = require('./models.js')
const developerQuestions = require('./developer-questions.json')

Question.remove({})
  .then(() => {
    Question.collection.insert(developerQuestions)
      .then((questions) => {
        console.log(questions)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
