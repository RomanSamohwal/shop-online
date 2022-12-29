import { Controller, Get, Post } from '@nestjs/common';
import { TypeService } from './type.service';

@Controller('type')
export class TypeController {

  constructor(private typeService: TypeService) {
  }

  @Post()
  create() {
    return 'created';
  }

  @Get()
  getAll() {
    return this.typeService.findAll();
  }
}
