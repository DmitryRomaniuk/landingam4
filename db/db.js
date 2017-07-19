const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const databaseUri = 'mongodb://heroku_6q05xjb0:aeamao92plaq974hja2nbhdhs5@ds145292.mlab.com:45292/heroku_6q05xjb0';
mongoose.connect(databaseUri, { useMongoClient: true })
    .then(() => console.log(`Database connected at ${databaseUri}`))
    .catch(err => console.log(`Database connection error: ${err.message}`));
