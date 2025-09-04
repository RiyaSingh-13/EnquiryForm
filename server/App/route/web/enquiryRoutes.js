let express = require("express");
let EnquiryRouter = express.Router();
const { enquiryInsert, enquiryDelete ,enquiryList,enquiryUpdate, enquirySingleRow} = require("../../controller/web/enquiryController");


EnquiryRouter.post("/insert",enquiryInsert)
EnquiryRouter.get("/enquiryList",enquiryList)
EnquiryRouter.delete("/delete/:id",enquiryDelete)
EnquiryRouter.put("/update/:id",enquiryUpdate)
EnquiryRouter. get("/single/:id", enquirySingleRow)


module.exports = EnquiryRouter;
