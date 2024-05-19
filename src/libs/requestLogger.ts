import { createLogger, transports, format } from "winston";

const Logger = createLogger({
  level: "info",
  format: format.json(),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/info.log", level: "info" }),
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/app.log" }),
  ],
});

export { Logger };
