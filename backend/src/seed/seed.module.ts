import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TodosModule } from 'src/todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from 'src/todos/entities/todo.entity';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    TodosModule,
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
})
export class SeedModule {}
