import connectDb from '@/config/connectDb';
import Users from '@/models/users';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    await connectDb();
    const users = await Users.find({},{latitude:1,longitude:1});
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    return NextResponse.json({ error: 'Failed to fetch coordinates' }, { status: 500 });
  }
}
