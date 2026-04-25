const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());

app.use('/user-api', require('./APIs/UserApi'))
app.use('/notes-api', require('./APIs/NotesApi'))

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB server')
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);
    })

