const express=require('express')
const app=express()
const router=express.Router()
const {InserData,login,create,like,Showlike}=require('./../inserData/index')
const {autindecationToke}=require('./../Auth/index')

router.post('/Register',InserData)
router.post('/login',login)
router.post('/create', autindecationToke ,create)
// router.get('/',(req,res)=>{
//     req.send('Data insert')
// })
router.post('/like/:id',autindecationToke,like)   
router.post('/total_likes',Showlike)

module.exports=router