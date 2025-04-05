const mongoose = require("mongoose")

const {createHmac,randomBytes } = require('node:crypto')

const {cratetoken} = require('../service/auth')
const { Agent } = require("node:http")

const UserSchema = new mongoose.Schema({
    UserName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    Number:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
    type:String,
    required:true
    },
    age:{
    type:Number,
    required:true
    },
    salt:{
        type:String,
    }
   
})
UserSchema.pre('save',  function(next){
    const user = this;
    if (!user.isModified("password")) return next();
    const salt = randomBytes(16).toString()
    const hashedpassword = createHmac('sha256',salt)
    .update(user.password)
    .digest('hex')
    console.log(hashedpassword)
    this.salt = salt
    this.password = hashedpassword
     return next()
})

UserSchema.static('matchthetoken', async function(email,  password,next){
    const user = await this.findOne({email})
    if(!user) throw new Error("user not found")
    const salt = user.salt 
    const newhashedpassword = createHmac('sha256',salt).update(password).digest('hex')
    const  haspaassold = user.password
    if(newhashedpassword !== haspaassold) throw new Error("password is not correct")
    const token = cratetoken(user)
    return token; 
})
const user = mongoose.model("user",UserSchema)

module.exports = user