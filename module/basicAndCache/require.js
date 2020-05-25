const a = require('./export');
const b = require.cache;
console.log('a', a);
console.log('b', b);
require('./export').message = 'caches';

console.log('require("./export").message', require('./export').message);

console.log('require.cache', require.cache);