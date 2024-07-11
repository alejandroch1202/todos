import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';
import { SeedModule } from './seed/seed.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      dbName: 'test',
    }),
    TodosModule,
    SeedModule,
    CommonModule,
  ],
})
export class AppModule {}
