const EventEmitter = require('events');
const emitter = new EventEmitter();

console.log("in events.js");

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('Logging a message123');


