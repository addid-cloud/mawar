import mongoose, {Schema, models} from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    kelas:{
        type:String,
        default:'X.1'
    },
},{timestamps: true})

const User = models.User || mongoose.model("User", userSchema)
export default User