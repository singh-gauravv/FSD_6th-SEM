const Promise = require('promise');
const mongoclient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
mongoclient.connect(url).then(function(err,db){
    db.collection('Test').updateOne({
        "Name":"John"
    },{
        $set:{
            "Name":"John Doe"
        }
    })
})
.catch(error =>alert(error.message));
