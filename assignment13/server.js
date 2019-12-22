const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.listen(port, () => {
    console.log('Server running on port' + port);
});


