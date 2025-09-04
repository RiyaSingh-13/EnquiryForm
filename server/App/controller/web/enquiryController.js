const enquiryModel=require("../../model/userEnquiryModel");

let enquiryInsert=(req,res)=>{
    let {name,email,phone,message}=req.body;
    console.log(req.body);
    let enquiry= new enquiryModel({
        name,
        email,
        phone,
        message
    });

    enquiry.save().then(()=>{
     res.send({status:1,message:"enquiry saved successfully"})
        console.log("data inserted");
    }).catch((err)=>{
      console.log(err);
        res.send({status:0,message:"enquiry not saved"+err})
    });
    

}

let enquiryList = async (req, res) => {
    let enquiry = await enquiryModel.find();
   res.send({status: true, enquiryList: enquiry});
}

let enquiryDelete=async(req,res)=>{
let enquiryId = req.params.id;
let delEnquiry = await enquiryModel.deleteOne({_id:enquiryId});
res.send({status:1 ,message:"enquiry deleted successfully",id:enquiryId,delres:delEnquiry});

}
let enquiryUpdate = async(req,res)=>{
     let enquiryID= req.params.id;
   let {name,email,phone,message}=req.body;
   let updateObj ={
    name,
    email,
    phone,
    message
   };
   let updateEnquiry = await enquiryModel.updateOne({_id:enquiryID},{$set:updateObj});
   res.send({status:1,message:"enquiry updated successfully", updateEnquiry});
}

let enquirySingleRow= async(req,res)=>{
    let enId = req.params.id;
    let enquiry = await enquiryModel.findOne({_id:enId});
    res.send({status:1 ,enquiry})
}
module.exports={enquiryInsert,enquiryList,enquiryDelete,enquiryUpdate,enquirySingleRow};