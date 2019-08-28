var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringbell = function() {
    console.log("Ring ring ring");
    eventEmitter.emit('bellrings', 'welcome');
}

eventEmitter.on('bellrings', function(message) {
    console.log(message);
});

eventEmitter.on('doorOpen', ringbell);
eventEmitter.emit('doorOpen');