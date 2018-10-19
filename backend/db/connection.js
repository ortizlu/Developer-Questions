const mongoose = require('mongoose', )

mongoose.connect('mongodb://localhost/developer_questions_db', { useNewUrlParser: true })

module.exports = mongoose
