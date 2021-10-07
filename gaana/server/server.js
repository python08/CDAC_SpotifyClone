const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()
app.use(cors('*'))
app.use(bodyParser.json())


// routers

const routerUser = require('./routes/user')
const routerAlbum = require('./routes/album')
const routerArtist = require('./routes/artist')
const routerSong = require('./routes/song')

// add routers

app.use('/album',routerAlbum)
app.use('/user',routerUser)
app.use('/artist',routerArtist)
app.use('/song',routerSong)

// upload data file from dir
// static routing
app.use(express.static('uploads'))


app.listen(4000,'0.0.0.0',()=>{
    console.log('server started on port 4000')
})