import * as http from 'http';
import {getApplication} from './app';
import {getConfig} from './arch/config';

getApplication()
  .then(startServer)
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

function startServer(application) {
  const port = getConfig('port');
  const server = http.createServer(application);
  server.listen(port);
  server.on('error', OnError(port));
  server.on('listening', OnListening(server));
}

const OnError = (port) => {
  return (error) => {
    if (error.syscall !== 'listen') throw error;
    const bind = (typeof port === 'string') ? `Pipe ${port}` : `Port ${port.toString()}`;

    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  };
};

const OnListening = (server) => {
  return () => {
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
  };
};
