const dbconnect = require('./dbconnect');

const showData = async()=>{
    let data = await dbconnect();
    let r = await data.find({}).toArray();
    console.log(r);
}
showData();

//-----------------by name find-----------------

const dbconnect = require('./dbconnect');

const showData = async()=>{
    let data = await dbconnect();
    let r = await data.find({name:'neha yadav'}).toArray();
    console.log(r);
}
showData();

//---------insert data----------------

const insert = async()=>{
    let data = await dbconnect();
    let r = await data.insert({name:"abc", email:"abc83@gmail.com",password:"59880"});
    if(r.acknowledged)
    {
        console.log("successfull:"+r.insertedIds[0]);
    }
    else
    {
        console.log("failed");
    }
    
}
insert();

// ------------insert many data-----------------

    const insert = async()=>{
    let data = await dbconnect();
    let r = await data.insertMany(
        [
        {name:"abcd ", email:"abcd25@gmail.com",password:"77321"},
        {name:"xyz", email:"xyz97@gmail.com",password:"1578"},
        {name:"abc", email:"abc12@gmail.com",password:"8792"},
        {name:"nmj", email:"nmj12@gmail.com",password:"123"}
        ]
        );
    if(r.acknowledged)
    {
        console.log("successfull:"+r.insertedIds[0]);
    }
    else
    {
        console.log("failed");
    }
    
}
insert();

//---------------update data----------------------

const update = async()=>{
    let data = await dbconnect();
    let r = await data.update(
       
        {name:"nikita dongre"},
        {
            $set:{name:"nikita"}
        }
        );
    if(r.acknowledged)
    {
        console.log("successfully updated data");
    } 
}
update();

//---------delete data---------------

const deleteOne = async()=>{
    let data = await dbconnect();
    let r = await data.deleteOne({name:"abc"});
    if(r.acknowledged)
    {
        console.log("successfully deleted data");
    }  
}
deleteOne();

//------------delete many data--------------------

    const  deleteData = async()=>{
    let data = await dbconnect();
    let r = await data.deleteMany(
              
        { name: { $in: [ "abcd", "xyz","abc","nmj" ] } }
                   
              
        );
    console.log(r);
}
deleteData();



