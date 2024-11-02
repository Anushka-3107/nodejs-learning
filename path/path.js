
const path = require('path');

const obj = {
    type : path.basename(__dirname),
    pathname: path.basename(__filename)
}

console.log(obj.type)