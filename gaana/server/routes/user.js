const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')
const cryptoJs = require('crypto-js') // used here to encrypt password

//SignUP
router.post('/signup',(request,response)=>{
    const{firstname,lastname,email,password} = request.body
    encryptPassword = cryptoJs.MD5(password)
    const query = `insert into user (firstname,lastname,email,password)
                    values ('${firstname}','${lastname}','${email}','${encryptPassword}')`
    db.query(query,(error,result)=>{
       response.send(utils.createResult(error,result))
    })
})

//SignIN
router.post('/signin',(request,response)=>{
    const{email,password} = request.body
    encryptPassword = cryptoJs.MD5(password)
    const query = `select firstname,lastname,email,inactive from user where email = '${email}'  and password = '${encryptPassword}'`
    db.query(query,(error,result)=>{
      if(error)  // this error will occur if there is prb in sql side eg query incorrect
      {
          response.send(utils.createErrorResult(error))
      }
      else{
          //user with correct email and password does not exist
        if(result.length == 0)
        {
            response.send(utils.createErrorResult('invalid username and password'))
        }
        else
        {
            response.send(utils.createResult(error,result[0]))
        }
      }
    })
})

//profile
router.get('/profile/:id',(request,response)=>{
    const{id} = request.params
    
    const query = `select id,firstname,lastname,email,inactive from user where id = '${id}'`
    db.query(query,(error,result)=>{
        if(error)  // this error will occur if there is prb in sql side eg query incorrect
      {
          response.send(utils.createErrorResult(error))
      }
      else{
          //user with correct email and password does not exist
        if(result.length == 0)
        {
            response.send(utils.createErrorResult('profile doest not exist'))
        }
        else
        {
            response.send(utils.createResult(error,result[0]))
        }
      }
      }
    )
})

//delete
router.delete('/profile/:id',(request,response)=>{
    const{id} = request.params
    
    const query = `delete from user where id = '${id}'`
    db.query(query,(error,result)=>{
         response.send(utils.createResult(error,result[0]))
    }
    )
})

module.exports = router