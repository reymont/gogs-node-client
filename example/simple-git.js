// https://www.npmjs.com/package/simple-git
// npm install simple-git

const git = require('simple-git');
const path = 'https://github.com/reymont/prometheus-file-webhook';

git(path).pull('origin', 'master')