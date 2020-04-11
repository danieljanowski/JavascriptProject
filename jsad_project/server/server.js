const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require("cors");

app.use(cors())

app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('jsad_project');
    const planetsCollection = db.collection('planets');
    app.use('/api/planets', createRouter(planetsCollection));
  })
  .catch(console.error);

app.listen(3000, function() {
  console.log(`Jsad server running on port ${this.address().port}`);
});