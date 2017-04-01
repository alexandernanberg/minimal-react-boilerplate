const path = require('path')
const express = require('express')
const compression = require('compression')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, 'public'), { maxAge: '7d' }))
app.use(compression())
app.use((req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')))

app.listen(port)

console.log(`Server is running on: http://localhost:${port}`)
