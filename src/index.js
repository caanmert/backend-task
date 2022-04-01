import express from 'express';

const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());

app.use('*', (req, res) => {
  res.status(404).json({ status: false, message: 'Address not found' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
