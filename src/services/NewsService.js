import News from '../models/News.js';

const addNews = (news) => News.create(news);
const getNewsById = (id) => News.findById(id);
const getAllNews = (title, date, sortByTitle, sortByDate) => News.find({ title, date }).sort({ date: sortByDate, title: sortByTitle });
const updateNews = (id, updatedNews) => News.findByIdAndUpdate(id, updatedNews);
const deleteNewsById = (id) => News.findByIdAndDelete(id);

export {
  addNews,
  getNewsById,
  getAllNews,
  updateNews,
  deleteNewsById,
};
