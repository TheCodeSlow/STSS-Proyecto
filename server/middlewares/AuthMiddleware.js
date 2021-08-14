const {verify} = require ("jsonwebtoken");


const validateToken = (req,res,next) => {

   const accessToken =  req.header("accessToken")

   if (!accessToken) return res.json({error: "Usuario no logeado"});


   try {
       const validToken = verify(accessToken, "importantsecret");
       req.user = validToken;
       if(validToken){
           return next();
       }
   } catch (error) {
       return res.json({error: error})
   }


}
module.exports = {validateToken};