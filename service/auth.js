const JWT = require('jsonwebtoken');
const scret = "Khanaval";
function cratetoken(user){
    const payload= {
        _id:user._id,
        email:user.email,
        Number:user.Number,
        UserName:user.UserName
    }
    const token = JWT.sign(payload,scret)
    return token
}
function validation(token){
    const pyload = JWT.verify(token,scret)
    return pyload
}

module.exports = {cratetoken,validation}