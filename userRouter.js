const express=require('express')

const router=express.Router()

const users=[
  {name:'ben',age:'20'},
  {name:'john',age:'30'},
  {name:'chris',age:'40'},
  {name:'jane',age:'50'},
]

router.get('/list',(req,res)=>{
  res.send({
    status:0,
    msg:'get succeed',
    data:users
  })
})

router.post('/add',(req,res)=>{
  const body = req.body
  console.log('body',body);
  res.send({
    status:0,
    msg:'add user succeed',
    data:body
  })
})


module.exports=router