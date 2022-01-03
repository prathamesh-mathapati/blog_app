const { TINY_BLOB } = require('mysql/lib/protocol/constants/types');

require('dotenv').config()
const knex=require('knex')({
    client:'mysql',
    connection:{
        host:process.env.host,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database
    }
})

knex.schema.createTable('user',table=>{
    table.increments('id'),
    table.string('name'),
    table.string('email'),
    table.string('password')
}).then(()=>{
    console.log('creat table');
}).catch((err)=>{
    // console.log(err);
    console.log('table is allredy create');
})

knex.schema.createTable('post',table=>{
    table.increments('id'),
    table.integer('Userid'),
    table.string('title'),
    table.string('description')

}).then(()=>{
    console.log('The post database is has been created');
}).catch((err)=>{
    console.log('The post database is allredy  created');
})

knex.schema.createTable('totel_like',table=>{
    table.increments('id'),
    table.integer('postid'),
    table.integer('Userid').primary(),
    table.string('likes'),
    table.string('Unlikes')
}).then(()=>{
    console.log('The like database is created ');
}).catch((err)=>{
    // console.log(err);
    console.log('The like database is  allredy  created ');
})

module.exports=knex