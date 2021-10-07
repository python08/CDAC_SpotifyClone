const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')
const cryptoJs = require('crypto-js')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/',upload.single('thumbnail'),(request,response)=>{
    const {id,title,artist_id,duration} = request.body

    // get the uploaded file name
    const filename = request.file.filename
    const query = `insert into album (id,title,artist_id,duration,thumbnail) values(${id},'${title}','${artist_id}','${duration}','${filename}')`

    db.query(query,(error,result)=>{
        response.send(utils.createResult(error,result))
    })
})

router.get('/songs/:id', (request, response) => {
    const { id } = request.params
    // const query = `select album.*, artist.firstName as artistFirstName, artist.lastName as artistLastName from album, artist where album.artistId = artist.id and album.id = ${id}`
    const query = `select 
      song.id, 
      song.title,
      song.duration,
      song.songFile,
      artist.firstName as artistFirstName, 
      artist.lastName as artistLastName,
      artist.thumbnail as artistThumbnail,
      album.thumbnail as thumbnail
      from album, artist, song
      where song.albumId = album.id 
            and album.artist_id = artist.id
            and song.albumId = ${id}`
    db.query(query, (error, artists) => {
      response.send(utils.createResult(error, artists))
    })
  })

router.get('/',(request,response)=>{
    const query = `select * from album`

    db.query(query,(error,result)=>{
        response.send(utils.createResult(error,result))
    })
})

module.exports = router