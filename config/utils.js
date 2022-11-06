const path = require('path')


module.exports = {
    resolve: filepath => {
        return path.join(__dirname, '../', filepath)
    }
}
