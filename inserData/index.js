require('dotenv').config()
const knex=require('./../connection/index')
const {generatetoken}=require('./../Auth/index')

exports.InserData=(req,res)=>{
    const data=req.body
    if(data.length<1){
    knex.from('uesr').then((data)=>{
        res.send('data is insert')
    }).catch((err)=>{
        res.send('data is not insert')
    })
}
else{
    res.send('data is alredy exit')
}
}

exports.login=(req,res)=>{
    knex('user').where({email:req.body.email, password: req.body.password}).then((data)=>{
        const token=generatetoken(req.body)
        res.cookie("token",token).send('you are logged in successfully')
    }).catch((err)=>{
        console.log(err);
    })
}

exports.create=(req,res)=>{
    const data=req.body
    let id1=data.Userid
    knex.from('post').select('*').insert(data).then(()=>{
        res.send({message: 'You posted new post.'})
    }).catch((err)=>{
        res.send({message: err})
    })
    knex.select('*').from('totel_like').then((data)=>{
        if (req.body.id===null){
            knex.select('*').from('totel_like').insert({id:1})
         }
    })
}



exports.like=(req,res)=>{
    //  if(req.body.id===req.params.id){
    if(req.body.likes===true){
    knex.select('*').from('totel_like')/*.where({id:req.params.id})*/.insert(req.body).then((data)=>{
        res.send('you like this post')
    }).catch((err)=>{
        console.log(err);
        res.send({message:'you nm are login first'})
    })
}else if(req.body.Unlikes===true){
    knex.select('*').from('totel_like').insert({Userid:req.params.id,likes:req.body.likes,Unlikes:req.body.Unlikes}).then((data)=>{
        res.send('you Unlike this post')
    }).catch((err)=>{
        console.log(err);
        res.send({message:'you hn are login first'})
    })
}

// }
}




exports.Showlike=(req,res)=>{
    knex.from('totel_like').then((data)=>{

        res.send(data)
    })
}
