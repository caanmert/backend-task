import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());

app.use('*', (req, res) => {
  res.status(404).json({ status: false, message: 'Address not found' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

const { connection, connect } = mongoose;
const uri = process.env.DB_URL;
connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
connection.once('open', () => { console.log('Mongodb database connection established'); });
