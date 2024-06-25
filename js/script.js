const fs = require('fs');

const FSManagerModule = require('./SFManager.js')
const FSManager = FSManagerModule.FSM

console.log('lessons 1');

// const data = fs.readFileSync('data.json', 'utf8');

// const file = new FSManager('data.json')
// const data = file.load()
// let obj = JSON.parse(data)

const file = new FSManager('data.json')
const obj = file.loadJSON()

// const file = new FSManager('data.json');
// const obj = file.loadJSON();

obj.push(
    {
        name: "Ilya 4",
        createdAt: (new Date()).toISOString(),
        key: "value",
        key2: 1
    }
)


console.log(Array.isArray(obj));

// fs.writeFileSync('data.json', JSON.stringify(obj, undefined,' '));
file.save(obj, '    ')




// TODO: вынести в отдельный файл  и подключить
// добавить метод loadJSON чтобы не писал jOSN.parse для всех жсон-файлов

// ------------------------------

// server.post('/users/', function(req, res) {
//     const userData = req.data;
//     obj.push(userData)
//     fs.writeFileSync('data.json', JSON.stringify(obj, undefined,' '));
// })



