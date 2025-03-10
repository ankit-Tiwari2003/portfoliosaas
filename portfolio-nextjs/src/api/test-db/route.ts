// portfolio-nextjs/src/api/test-db/route.ts
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';

export async function GET() {
  try {
    // Test database connection
    await connectToDatabase();
    
    // If we got here, connection was successful
    return NextResponse.json({ 
      message: 'Successfully connected to MongoDB!',
      connection: true 
    });
  } catch (error) {
    console.error('Database connection failed:', error);
    return NextResponse.json(
      { 
        message: 'Failed to connect to MongoDB', 
        connection: false 
      },
      { status: 500 }
    );
  }
}