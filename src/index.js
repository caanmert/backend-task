import mongoose from 'mongoose';
import Koa from 'koa';
import 'dotenv/config';
import bodyparser from 'koa-bodyparser';
import newsRouter from './routes/news.js';

const app = new Koa();

app.use(bodyparser());
app.use(newsRouter.routes());

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
const { connection, connect } = mongoose;
const uri = process.env.DB_URL;
connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, ignoreUndefined: true });
connection.once('open', () => { console.log('Mongodb database connection established'); });
