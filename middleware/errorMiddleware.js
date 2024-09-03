const errorMiddleware = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.json({
    status: statusCode,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });

  next();
};

export default errorMiddleware;
