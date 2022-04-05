import News from '../models/News';

const addNews = (news) => News.create(news);
const getNewsById = (id) => News.findById(id);
const getAllNews = () => News.find({});
const deleteNewsById = (id) => News.findByIdAndDelete(id);

export {
  addNews,
  getNewsById,
  getAllNews,
  deleteNewsById,
};
