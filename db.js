const MongoClient = require("mongodb").MongoClient;

function initialize(app, dbName, collectionName) {
  const MONGO_ID = process.env.MONGO_ID;
  const MONGO_PASS = process.env.MONGO_PASS;
  const MONGO_URL = `mongodb+srv://${MONGO_ID}:${MONGO_PASS}@cluster0.auhmw.mongodb.net/armoria_api?retryWrites=true&w=majority`;

  MongoClient.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, client) {
    if (err) return console.log(err);
    app.locals.collection = client.db(dbName).collection(collectionName);
  });
}

module.exports = {initialize};
