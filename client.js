const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8'); 

  conn.on('connect', (data) => {
    console.log('Successfully connected to game server" ');
    conn.write("Name: ML");

    // setInterval(() => {
    //   conn.write('Move: up')
    // }, 200);
    // setInterval(() => {
    //   conn.write('Move: down')
    // }, 200);
    // setInterval(() => {
    //   conn.write('Move: left')
    // }, 200);
    // setInterval(() => {
    //   conn.write('Move: right')
    // }, 200);
     });

     conn.on('data', (data) => {
      console.log('Server says', data);
    });
 
  return conn;

    }

module.exports = {connect};
