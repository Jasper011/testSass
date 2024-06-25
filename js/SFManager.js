const fs = require('fs')
module.exports = {
        FSM: class FSManager{
        constructor(PATH) {
            this.PATH = PATH;
        }

        load() {
            const text = fs.readFileSync(this.PATH, 'utf8');
            return text;
        }
        
        loadJSON(){
            const text = this.load()
            return JSON.parse(text)
        }

        save(data, offset) {
            return fs.writeFileSync(this.PATH, JSON.stringify(data, undefined, offset));
        }
    }
}
