const sexpress = require('sexpress')
const app = sexpress()

if (!module.parent) {
    app.run()
}
