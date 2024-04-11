class AppError extends Error {
  constructor(statusCode, response) {
    super();
    this.statusCode = statusCode;
    this.response = response;
  }
}

const handleErrors = (error) => {
  try {
    if (error.errors.length > 0) {
      return error.errors.map(({ message }) => message);
    }
  } catch (er) {
    return error;
  }
};

const handleAppError = (error, response) => {
  return response
    .status(error.statusCode)
    .json(error.response ? error.response : error.message);
};

export { AppError, handleErrors, handleAppError };
