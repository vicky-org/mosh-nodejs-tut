const EventEmitter = require('events');

var url = 'https://example.com/log';
class Logger extends EventEmitter{
    log(message) {
        // Simulate logging
        console.log(message);
        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}

module.exports = Logger