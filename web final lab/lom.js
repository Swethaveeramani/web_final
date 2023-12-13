http = require('http')
url = require('url')
qs = require('querystring')

let em="a";
let psw="b";

function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("Request for "+path+" recieved");
    var query=url.parse(request.url).query;
    var email=qs.parse(query)["email"];
    em=email;
    var psw=qs.parse(query)["psw"];
    psw=psw;
    response.write("Hello "+email+", your password is "+psw);
    response.end();
    
    insertdata();
}
http.createServer(onRequest).listen(5000);
console.log("Server is running now....");


const mongoose =require("mongoose")
const urla = "mongodb://localhost:27017/local";
const name1 = new mongoose.Schema({ email: String, psw: String});
const Name= mongoose.model('Name',name1)

const db = async() =>{
    try{    
    console.log("entered")    
    const data=await mongoose.connect(urla,    
    {    
        useNewUrlParser: true,    
        useUnifiedTopology: true,    
        family: 4,    
    }
    )
    console.log("connected")
    }    
    catch(err){    
    console.log(err)    
    }    
}
db()

    const insertdata=async()=>{
        const cat = new Name({ email:em , psw:psw });        
        cat.save().then(() => console.log('Saved in db'));        
        }