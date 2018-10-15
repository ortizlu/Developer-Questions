const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/developer_questions_db')

module.exports = mongoose
