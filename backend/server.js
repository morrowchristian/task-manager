const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongodb:27017/myapp';

app.use(cors());
app.use(express.json());

// Connect to MongoDB with retry
let db;
async function connectToMongo() {
  const maxRetries = 5;
  let retries = 0;
  while (retries < maxRetries) {
    try {
      const client = new MongoClient(MONGODB_URI, { connectTimeoutMS: 10000 });
      await client.connect();
      db = client.db('myapp');
      console.log('Connected to MongoDB');
      return;
    } catch (err) {
      retries++;
      console.error(`MongoDB connection attempt ${retries} failed:`, err);
      if (retries === maxRetries) {
        console.error('Max retries reached. MongoDB connection failed.');
        return;
      }
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
}
connectToMongo();

app.get('/', (req, res) => {
  res.send('Backend is running! Try /api/hello, /api/test, or /api/users.');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'This is a test endpoint!' });
});

app.get('/api/users', async (req, res) => {
  if (!db) {
    return res.status(503).json({ error: 'Database not connected' });
  }
  try {
    const users = await db.collection('users').find({}).toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});