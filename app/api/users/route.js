import connectDb from "@/config/connectDb";
import Users from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(request){
    await connectDb();
    try{
        const body = await request.json()

        if (Array.isArray(body))
        {
            const newUsers = await Users.insertMany(body)
            return NextResponse.json({message: "Users created", user: newUsers }, {status: 201})  
        }
        else
        {
            const newUser = new Users(body)
            await newUser.save()
            return NextResponse.json({message: "User created", user: newUser }, {status: 201})  
        }
    }
    catch(error){
        return NextResponse.json({message: error.message},{status: 500})
    };
}

export async function GET(req) {
    try {
      await connectDb();

      const totalUsers = await Users.countDocuments();
      const users = await Users.find()
  
      return NextResponse.json({ users });
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }