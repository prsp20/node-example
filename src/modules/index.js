import {Router} from 'express';
import example1Module from './module1'
import example2Module from './module2'

export default async () => {
  const router = new Router();

  router.use(example1Module());
  router.use(example2Module());

  return router;
}