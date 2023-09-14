
const moment = require('moment');
const multer=require("multer");

const imgconfig=multer.diskStorage({
  destination:(req,file,callback)=>{
      callback(null,"./uploads");
  },
      filename:(req,file,callback)=>{
          callback(null,`imgae-${Date.now()}.${file.originalname}`);
      }
  
});


// img filter

const isImage=(req,file,callback)=>{
  if(file.mimetype.startsWith("image")){
      callback(null,true)
  }else{
      callback(new Error("only image is allowd"));
  }



}
const upload =multer({
  storage:imgconfig,
  fileFilter:isImage
});


const loan = require("./service");

function loanController() {
  
  const listLoan = function(req, res) {
    loan.list().then(data => res.json(data));
  };

  const addLoan = function(req, res) {
    loan.add(req.body,req.file).then(data => res.json(data));
  };

  const deleteLoan = function(req, res) {
    loan.delete(req.param.id).then(data => res.json(data));
  };

  return {
    list: listLoan,
    add: addLoan,
    delete: deleteLoan
  };
}

module.exports = loanController();
