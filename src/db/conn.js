const mongoose = require("mongoose");

//creating a database

mongoose.connect('mongodb+srv://souravraj32:Kc130deploy@souravbooking.fyxeibc.mongodb.net/dynamic?retryWrites=true&w=majority',{
   
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("Connection Successful");
}).catch((error)=>{
    console.log(error);
})


