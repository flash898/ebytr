const { MongoClient } = require('mongodb');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const ATLAS_URI = process.env.ATLAS_URI;
const DB_NAME = 'ebytr';
let db = null;

// connect to database
const connection = () => (db
  ? Promise.resolve(db)
  : MongoClient.connect(ATLAS_URI, options).then((conn) => {
    db = conn.db(DB_NAME);
    console.log("Successfully connected to MongoDB."); 
    return db;
  }));

module.exports = { connection };
