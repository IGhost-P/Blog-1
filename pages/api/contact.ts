import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  console.log(process.env.NEXT_PUBLIC_API_ROOT);
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!regEmail.test(email) || !Boolean(name.trim()) || !Boolean(message.trim())) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    try {
      const newMessage = { id: {}, email, name, message };

      const client = await MongoClient.connect(process.env.NEXT_PUBLIC_API_ROOT as string);
      const db = client.db('blog');

      const result = await db.collection('contact').insertOne(newMessage);
      newMessage.id = result.insertedId;

      client.close();

      res.status(200).json(newMessage);
    } catch (e) {
      res.status(500).json({ message: 'Initial Server error' });
      return;
    }
  }
}

export default apiHandler;
