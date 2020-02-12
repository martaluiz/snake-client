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

  conn.on('connect', () => {
    console.log('=) =) =)');
  });

  
  return conn;
}

module.exports = { connect };
