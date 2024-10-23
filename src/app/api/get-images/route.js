import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const folderPath = "phantomlens/share";
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: folderPath,
      resource_type: 'image'
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json(
      { message: 'Error fetching images', error: error.message },
      { status: 500 }
    );
  }
}