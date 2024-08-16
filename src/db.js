const { MongoClient } = require('mongodb');

// Substitua a string de conexão pelo valor copiado do MongoDB Atlas
const uri = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB Atlas");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas", error);
    }
}

connectToDatabase();

module.exports = client;
