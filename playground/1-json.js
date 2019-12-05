const fs = require('fs');
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);



// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);






const jsonBuffer = fs.readFileSync('1-json.json');
const dataJSON = jsonBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Brian';
data.age = 24;

const dataString = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataString);
console.log(dataString);
