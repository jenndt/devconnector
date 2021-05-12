const mongoose = require('mongoose'); // we'll be using Mongoose to connect to the mongoDB
const config = require('config'); // grab the string in default.json => thus require the config package => require.
const db = config.get('mongoURI'); //get the string in a var called db & go to the config file & get the mongURI value

//connect to the mongodb
//since mongoose.connect returns a promise, we'll put an await before it. Pass in the (db) as a param

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log("MongoDB has connected..."); //So we know that the Mongoose is connected to the MongoDB
    } catch (err) {
        console.error(err.message); // pass on the err, which has a message property on it. 
        // Exit process with failure
        process.exit(1); // Then escape the process with a failure. This basically makes the application fail
    }
}

module.exports = connectDB; //export connectDB function, so we can use it in the server.js