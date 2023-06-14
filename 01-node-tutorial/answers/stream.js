const { createReadStream } = require('fs');

const highWaterMark = 200;
let counter = 0;

const stream = createReadStream('../content/big.txt', { encoding: 'utf8', highWaterMark });

stream.on('data', (chunk) => {
  counter++;
  console.log('Received chunk:', chunk);
});

stream.on('end', () => {
  console.log('Number of chunks received:', counter);
});

stream.on('error', (error) => {
  console.error('Error occurred:', error);
});