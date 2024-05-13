import winston from "winston";
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/app.log" }),
  ],
});
const requestLogger = (req, res, next) => {
  logger.log("verbose", "This is a verbose message");
  logger.log("debug", "This is a debug message");
  logger.log("silly", "This is a silly message");
  logger.log("error", "This is an error message");
  logger.log("warn", "This is a warning message");
  logger.log("info", "This is an info message");
  res.send("Request logged");
};

export { requestLogger };
