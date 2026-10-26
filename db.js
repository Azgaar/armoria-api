let connection;

async function initialize(app, dbName, collectionName) {
  const {MONGODB_URI, MONGO_ID, MONGO_PASS} = process.env;
  if (!MONGODB_URI && (!MONGO_ID || !MONGO_PASS)) return;
  if (app.locals.collection) return;

  const uri = MONGODB_URI ||
    `mongodb+srv://${encodeURIComponent(MONGO_ID)}:${encodeURIComponent(MONGO_PASS)}@cluster0.auhmw.mongodb.net/armoria_api?retryWrites=true&w=majority`;
  if (!connection) {
    const {MongoClient} = require("mongodb");
    connection = MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 3000
    }).catch(error => {
      connection = undefined;
      throw error;
    });
  }
  const client = await connection;
  app.locals.collection = client.db(dbName).collection(collectionName);
}

module.exports = {initialize};
