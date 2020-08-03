const reactDocs = require('react-docgen');
const fs = require('fs');

const filePath = './class.jsx';

const source = fs.readFileSync(filePath, 'utf8');

const parsedProps = reactDocs.parse(source);

console.log('parsed', parsedProps);
