const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.177',
    port: 50541
  });
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says', data);
  });

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
  
 
  return conn;

    }

module.exports = {connect};
