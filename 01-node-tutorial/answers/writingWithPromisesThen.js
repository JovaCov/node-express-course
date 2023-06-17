const {writeFile, readFile} = require('fs').promises

writeFile('writing-with-promises.txt', 'first write \n')
.then(() => {
    return writeFile('writing-with-promises.txt', 'second write \n');
    console.log('second write successful');
})
.then(() => {
    return writeFile('writing-with-promises.txt', 'third write \n');
    console.log('third write successful');
})
.then (() => {
    return readFile('writing-with-promises.txt', 'utf8');
})
.then((data) => {
    console.log(`file contains: \n ${data}`);
})
.catch((err) => {
    console.log(err)
});