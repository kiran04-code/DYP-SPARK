const {validation}  = require('../service/auth')
 function chekauth(cookiesName){
    return  function(req, res, next){
        const token = req.cookies[cookiesName]
        if(!token) {
            return next()
        }
        try {
            const payloadnew = validation(token)
            req.user = payloadnew
            next()
        } catch (error) {
            return res.status(401).json({message: "unauthorized"})
        }
    }
   
}
module.exports = {chekauth}