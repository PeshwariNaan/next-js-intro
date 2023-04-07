import { MongoClient } from 'mongodb';

// This file will never wind up on the client side so this is a secure place to put credentials - however we still
// do not want to expose them to the public on a public github repo so we will use environment variables to store them.

// /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGO_URL);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
