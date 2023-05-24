const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/dog', function (req, res) {
    res.send({ 'sound': '멍멍' })
})

app.get('/sound/:name', function (req, res) {
    const { name } = req.params

    if (name == 'dog') {
        res.send({ 'sound': '멍멍' })
    } else if (name == 'cat') {
        res.send({ 'sound': '야옹' })
    } else if (name == 'pig') {
        res.send({ 'sound': '꿀꿀' })
    } else {
        res.send({'sound': '알수없음'})
    }

})

app.listen(3000)