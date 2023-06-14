const {writeFile, readFile} = require('fs').promises

async function writer () {
    try {
        await writeFile('writing-with-promises.txt', 'first write \n');
        await writeFile('writing-with-promises.txt', 'second write \n', {flag: 'a'});
        await writeFile('writing-with-promises.txt', 'third write \n', {flag: 'a'});
        console.log('write successful');
    } catch (err) {
        console.log(err);
    }
}

async function reader() {
    try {
        const data = await readFile('writing-with-promises.txt', 'utf8');

        console.log(`file containt ${data}`);

    } catch (err) {
        console.log(err);
    }
}

async function readWrite () {
    await writer();
    await reader();
}

readWrite();