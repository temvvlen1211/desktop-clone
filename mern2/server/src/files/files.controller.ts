import { Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  upload(@UploadedFiles() files: Array<Express.Multer.File>) {
    return this.filesService.upload(files);
  }
}
