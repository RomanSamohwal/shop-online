import { Module } from '@nestjs/common';
import { TypeModule } from './type/type.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [TypeModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'online-shop',
      models: [],
      autoLoadModels: true,
    }),
    BrandModule,
  ],
})
export class AppModule {
}
