const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email: String,
    password: String,
    confirmpw:String
})
const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel
