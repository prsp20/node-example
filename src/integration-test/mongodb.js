import MongoInstance from 'inmemory-mongo';
import getPort from 'get-port';

export const startMongodb = async () => {
  const port = await getPort();;
  const mongoInstance = new MongoInstance(port);
  await mongoInstance.start();
  return mongoInstance;
};

export const stopMongodb = async (mongoInstance) => {
  if (mongoInstance) {
    await mongoInstance.stop();
  }
};
