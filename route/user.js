const express=require('express')
const router=express.Router()
const{getUser,addUser,removeUser,updateUser }=require('../controllers/users')

// get les user
//http://localhost:4000/users/getuser
router.get('/getuser',getUser)


// post les user
//http://localhost:4000/users/adduser
  router.post('/adduser',addUser)

// update les user
//http://localhost:4000/users/updateuser/:id
router.put('/updateuser/:id',updateUser)

// delete les user 
//http://localhost:4000/users/remove/:id
 router.delete('/remove/:id',removeUser)

module.exports=router