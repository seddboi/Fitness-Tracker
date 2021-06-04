const express = require('express');
const mongoose = require('mongoose');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

const PORT = process.env.PORT || 3001;

mongoose.connect(
    process.env.MONGOD_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
    }
);

app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/htmlRoutes.js'));

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});
