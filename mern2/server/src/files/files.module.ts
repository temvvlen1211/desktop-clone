import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';
import { nanoid } from 'nanoid';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/tmp');
  },
  filename: (req, file, cb) => {
    const fileName = () => nanoid();
    const splittedPath = file.originalname.split('.');
    const fileExtention = splittedPath[splittedPath.length - 1];
    cb(null, `${fileName}.${fileExtention}`);
  },
});

@Module({
  imports: [
    MulterModule.register({
      storage,
      limits: {
        fileSize: 1024 * 1024 * 5, // Maximum file size in bytes (5 MB)
      },
      fileFilter: (req, file, cb) => {
        if (file.mimetype.includes('image') || file.mimetype.includes('video')) {
          cb(null, true);
        } else {
          cb(null, false);
        }
      },
    }),
  ],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
