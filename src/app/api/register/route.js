import mongoose from "mongoose"
import { User } from "../../models/User"
import dbConnect from '@/lib/dbConnect'

export async function POST(req){
    await dbConnect()

    try {
        const body = await req.json()
        const {email,password } =  body

        const existingUserbyEmail = await User.findOne({email})

        if(existingUserbyEmail){
            return Response.json(
                {
                  success: false,
                  message: "User already exist with this email ",
                },
                { status: 500 }
              );
        }

        const createdUser = await User.create(body)

        return Response.json(
            {
              success: true,
              createdUser,
              message: "User registered Successfully.",
            },
            { status: 201 }
          );


    
    // console.log(createdUser)
    // return Response.json(createdUser)
    } catch (error) {
        console.error("Error registering user",error);

        // error for frontend
        return Response.json(
          {
            success: false,
            message: "Error registering User",
          },
          {
            status: 500,
          }
        );
    }
    
}