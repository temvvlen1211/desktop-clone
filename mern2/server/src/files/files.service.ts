import { Injectable } from '@nestjs/common';
import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import env from 'src/env';

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

@Injectable()
export class FilesService {
  async upload(files: Array<Express.Multer.File>) {
    const result: UploadApiResponse[] = [];
    for (const file of files) {
      const uploadedFile = await cloudinary.uploader.upload(file.path);
      result.push(uploadedFile);
    }
    return result;
  }
}
