const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const dbName = "config";
const client = new MongoClient(url);

async function dbconnect()
{
    let result = await client.connect();
    db = result.db(dbName);
    return db.collection('e-comm');
}
module.exports = dbconnect;