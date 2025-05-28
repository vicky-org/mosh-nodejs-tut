const EventEmitter = require('events');
const emitter = new EventEmitter();

console.log("in events.js");

// Register a listener for the 'messageLogged' event
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

// Emit the 'messageLogged' event
emitter.emit('messageLogged', { id: 1, url: 'http://' });


