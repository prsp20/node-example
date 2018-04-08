import bodyParser from 'body-parser';
import healthCheck from 'express-healthcheck';
import express from 'express';
import {errorHandler, notFoundHandler} from './arch/middleware/error';
import routes from './modules';

export const getApplication = async () => {
  const app = express();

  _middleware(app);
  await _routes(app);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};

const _middleware = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
};

const _routes = async (app) => {
  // const jwtSecret = getConfig('authentication/secret');
  // TODO: app.use(authenticationMiddleware);

  app.use('/health', healthCheck());

  const applicationRoutes = await routes();
  app.use('/', applicationRoutes);
  return app;
};
