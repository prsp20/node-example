import HttpError from './HttpError';

export {HttpError};

export const notFoundHandler = (req, res, next) => {
  return next(new HttpError(404, 'Path not found'));
};

export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;

  if (err.status === 500) {
    // TODO Log error
  }

  return res.status(status)
    .json({
      status: status,
      errorMessage: err.message || 'Internal error occurred'
    });
};
