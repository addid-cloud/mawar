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

// // Money Schema
// const moneySchema = new mongoose.Schema({
//     amount: {
//       type: Number,
//       required: true,
//     },
//     currency: {
//       type: String,
//       required: true,
//     },
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//       required: true,
//     },
//     // ... other fields like transaction dates, notes, etc.
//   });
//   const Money = mongoose.model('Money', moneySchema);
const User = models.User || mongoose.model("User", userSchema)
export default User