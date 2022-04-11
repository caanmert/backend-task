import Router from 'koa-router';
import {
  create, getAll, getOne, remove, update,
} from '../controllers/NewsController.js';

const newsRouter = new Router({ prefix: '/api/news' });

newsRouter.post('/', create);
newsRouter.get('/', getAll);
newsRouter.get('/:id', getOne);
newsRouter.put('/:id', update);
newsRouter.delete('/:id', remove);

export default newsRouter;
