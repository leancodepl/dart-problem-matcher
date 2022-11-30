const path = require('path');

const matcherPath = path.join(__dirname, 'dart-problem-matcher.json');
console.log(`::add-matcher::${matcherPath}`);