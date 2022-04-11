import mongoose from 'mongoose';

const { Schema } = mongoose;

const NewsSchema = new Schema({

  date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const News = mongoose.model('news', NewsSchema);

export default News;
