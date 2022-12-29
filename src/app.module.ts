import { Module } from '@nestjs/common';
import { TypeModule } from './type/type.module';

@Module({
  imports: [TypeModule]
})
export class AppModule {}
