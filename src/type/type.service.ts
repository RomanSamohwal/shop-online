import { Injectable } from '@nestjs/common';
import { TypeModel } from './type.model';

@Injectable()
export class TypeService {
  private readonly types: TypeModel[] = [{ id: '1', name: 'Samsung' }];

  create(type: TypeModel) {
    this.types.push(type);
  }

  findAll(): TypeModel[] {
    return this.types;
  }
}
