#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('./app');
const debug = require('debug')('exp-test:server');
const http = require('http');

/**
 * Get port from environment and store in Express.
 */

// eslint-disable-next-line no-use-before-define
const port = normalizePort(process.env.PORT || '8000');
app.set('port', port);
console.log(`Server started on http://localhost:${port}`);
/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
/* eslint-disable no-use-before-define */
server.on('error', onError);
server.on('listening', onListening);
/* eslint-enable no-use-before-define */

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const portApp = parseInt(val, 10);

    if (isNaN(portApp)) {
    // named pipe
        return val;
    }

    if (portApp >= 0) {
    // port number
        return portApp;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
    switch (error.code) {
    case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        // eslint-disable-next-line no-process-exit
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        // eslint-disable-next-line no-process-exit
        process.exit(1);
        break;
    default:
        throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
