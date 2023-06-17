const EventEmitter = require('events');

const customEmitter = new EventEmitter;

customEmitter.on('addSpace', (str) => {
    console.log(str.split('').join(' '));
})

customEmitter.emit('addSpace', 'Jovany');