const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')
const cryptoJs = require('crypto-js')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/', upload.single('songFile'), (request, response) => {
    const { title, artistId, albumId, duration } = request.body
  
    // get the uploaded file name
    const filename = request.file.filename
  
    const query = `insert into song (title, artistId, albumId,  songFile, duration) values ('${title}', '${artistId}', '${albumId}', '${filename}', '${duration}')`
    db.query(query, (error, songs) => {
      response.send(utils.createResult(error, songs))
    })
  })

// router.post('/songFile/:id',upload.single('songFile'),(request,response)=>{
//     const {id} = request.params

//     // get the uploaded file name
//     const filename = request.file.filename
//     const query = `update song set songFile = '${filename}' where id = '${id}'`

//     db.query(query,(error,result)=>{
//         response.send(utils.createResult(error,result))
//     })
// })



router.get('/',(request,response)=>{
    const query = `select 
    song.id, 
    song.title,
    song.duration,  
    song.songFile,
    song.albumId,    
    artist.firstName as artistFirstName, 
    artist.lastName as artistLastName,
    album.title as albumTitle
    from album, artist, song 
    where song.albumId = album.id and album.artist_id = artist.id`

    db.query(query,(error,result)=>{
        response.send(utils.createResult(error,result))
    })

})

module.exports = router