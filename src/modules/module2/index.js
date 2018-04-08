import { Router } from 'express';
import ExampleClient from './client/ExampleClient';
import ExampleService from './ExampleService';
import ExampleController from './ExampleController';
import {getConfig} from '../../arch/config';
import uuid from 'uuid/v4'

export default () => {
  const externalServiceUrl = getConfig('service/url');

  const client = new ExampleClient(externalServiceUrl);
  const service = new ExampleService(client, uuid);
  const controller = new ExampleController(service);

  const router = new Router();
  router.post('/example2', controller.create);
  router.get('/example2/:id', controller.getById);

  return router;
};
