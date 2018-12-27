const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema/schema');
const keys = require('./config/keys');

const app = express();

// Allow cross-origin requests
app.use(cors());

// Connect to mLab database
// Make sure to replace db creds
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening for requests on port 4000');
});
