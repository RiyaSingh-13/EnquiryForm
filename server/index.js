let express=require("express");
let app=express();
let mongoose=require("mongoose");
const EnquiryRouter = require("./App/route/web/enquiryRoutes");
require("dotenv").config();
let cors=require("cors");
app.use(cors());

app.use(express.json());

app.use("/api/website/enquiry",EnquiryRouter);




// connectivity  with mongoDB
mongoose.connect(process.env.DBURL).then(()=>{
console.log("db connected");
app.listen(process.env.PORT || 3000, ()=>{
    console.log("server started ");
})
}).catch( (err)=>{ console.log(err)})