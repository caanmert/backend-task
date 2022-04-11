import validationSchema from '../middlewares/validation/validationSchema.js';
import {
  addNews, getAllNews, getNewsById, updateNews, deleteNewsById,
} from '../services/NewsService.js';

const create = async (ctx) => {
  const news = ctx.request.body;
  const { error } = await validationSchema.create.validate(news);

  if (error) {
    ctx.status = 403;
    ctx.body = {
      error: error.message,
    };
  } else {
    try {
      const createdNews = await addNews(news);
      ctx.status = 201;
      ctx.body = {
        data: createdNews,
      };
    } catch (err) {
      ctx.status = 400;
      ctx.body = {
        error: err.message,
      };
    }
  }
};

const getAll = async (ctx) => {
  const { error } = await validationSchema.getAll.validate(ctx.request.query);
  if (error) {
    ctx.status = 403;
    ctx.body = {
      error: error.message,
    };
  } else {
    try {
      const {
        title, date, sortByDate, sortByTitle,
      } = ctx.request.query;
      const allNews = await getAllNews(title, date, sortByTitle, sortByDate);
      ctx.status = 200;
      ctx.body = {
        data: allNews,
      };
    } catch (err) {
      ctx.status = 404;
      ctx.body = {
        error: err.message,
      };
    }
  }
};

const getOne = async (ctx) => {
  const { id } = ctx.request.params;
  try {
    const news = await getNewsById(id);
    ctx.status = 200;
    ctx.body = {
      status: true,
      data: news,
    };
  } catch (err) {
    ctx.status = 404;
    ctx.body = {
      error: err.message,
    };
  }
};

const update = async (ctx) => {
  const { id } = ctx.request.params;
  const { body } = ctx.request;

  const { error } = await validationSchema.update.validate(body);
  if (error) {
    ctx.status = 403;
    ctx.body = {
      error: error.message,
    };
  } else {
    try {
      const news = await updateNews(id, body);
      ctx.status = 201;
      ctx.body = {
        data: news,
      };
    } catch (err) {
      ctx.status = 404;
      ctx.body = {
        error: err.message,
      };
    }
  }
};

const remove = async (ctx) => {
  const { id } = ctx.request.params;

  try {
    const news = await deleteNewsById(id);
    ctx.status = 200;
    ctx.body = {
      status: true,
      data: news,
    };
  } catch (err) {
    ctx.status = 404;
    ctx.body = {
      error: err.message,
    };
  }
};

export {
  create,
  getAll,
  getOne,
  update,
  remove,

};
