import{model, models, Schema} from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    password: {
        type:String,
        required:true,
        validate:pass=>{
            if(!pass?.length || pass?.length<5){
                new Error("Password must be at least 5 characters")
            }
        }
    }
},{timestamps:true})

UserSchema.post('validate',function (user){
    const NotHashedpassword = user.password 
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(NotHashedpassword,salt)
    
})

export const User = models?.User || model('User',UserSchema)