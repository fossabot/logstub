// index.js
/* eslint no-unused-vars: "off" */

// This class exists to stub out the logger when it is not included
class LogStub {
  constructor() {}

  log(...args) {
    return;
  }

  silly(...args) {
    return;
  }

  debug(...args) {
    return;
  }

  verbose(...args) {
    return;
  }

  info(...args) {
    return;
  }

  warn(...args) {
    return;
  }

  error(...args) {
    return;
  }

  // Log4J levels
  fatal(...args) {
    return;
  }

  trace(...args) {
    return;
  }

  all(...args) {
    return;
  }

  // Other logging library levels
  critical(...args) {
    return;
  }
}

module.exports = LogStub;
