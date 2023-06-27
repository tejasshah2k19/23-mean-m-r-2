const jwt = require("jsonwebtoken")
const { SEC_KEY } = process.env 

module.exports = function(req,res,next){
    console.log("in the AuthMidd");
    //token -> db 
      jwt.verify(req.headers.token,SEC_KEY,function(err,decoded){

        if(err){
            console.log(err);
            res.json({msg:"Please Login before acccess the service",rcode:-9,data:""})
        }else{
            console.log("decoded => ",decoded);
            next();
        }
      })
}