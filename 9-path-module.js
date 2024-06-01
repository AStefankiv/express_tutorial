const { log } = require('console');
const path = require('path');

console.log('Path.sep: ', path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log('filePath: ', filePath);

const base = path.basename(filePath);
console.log('Base: ', base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log('Absolute: ', absolute);