// require needed modules
let express = require('express');

let app = express()

// declare routes
app.get('/', (req, res) => {
    res.send('Home page stub')
})

// pick a port for it to listen to
app.listen(3000, () => {
    console.log('Ready to rock and roll! 👺')
});