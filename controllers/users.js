let userslist=require('../data')
const {v4:uuidv4}=require('uuid')
exports.getUser   =(req,res)=>{
   try{
    res.json(userslist)
   } catch(err){
     res.send("error fetching")
   }
}
exports.addUser=(req,res)=>{
    try{
     const newUser={
         ...req.body,id:uuidv4()
     }
     if(!newUser.name){
         return res.status(400).json({msg:"enter your name please"})
     }else if(!newUser.email){
         return res.status(400).json({msg:"enter your email please"})
     }
     userslist.push(newUser)
     res.json({msg:"user added",userslist,newUser})
 } catch(err){
     res.send("error added")
       }
   }
 exports.removeUser=(req,res)=>{
    try{
        const id = req.params.id
        userslist = userslist.filter(user=>user.id!=id)
        res.json({msg:"user delete",userslist})
    }catch(err){
        res.send("error delete")
          }
 
 }
exports.updateUser=(req,res)=>{
try{
   const id =req.params.id
   const userEdit =userslist.find(el=>el.id==Number(id))
   let updUser={...userEdit,...req.body }
   res.json({msg:"user edite",updUser,userslist})
} catch(err){
    res.send("error update")
      }
 }