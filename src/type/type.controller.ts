import { Body, Controller, Get, Post } from '@nestjs/common';
import { TypeService } from './type.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('type')
export class TypeController {

  constructor(private typeService: TypeService) {
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.typeService.create(createPostDto)
  }

  @Get()
  getAll() {
    return this.typeService.findAll();
  }
}
