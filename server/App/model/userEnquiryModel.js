
let mongoose=require("mongoose");
let schema=mongoose.Schema;

let EnquirySchema= new schema({
   name:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true,
    unique:true
  },
  phone:{
    type:String,
    required:true
    
  },
  message:{
    type:String,
    required:true
  }
})        
let enquiryModel=mongoose.model("enquiry",EnquirySchema);
module.exports=enquiryModel; 
  


