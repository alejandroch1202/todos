import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from 'src/todos/entities/todo.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Todo.name)
    private readonly todoModel: Model<Todo>,
  ) {}

  async populateDatabase() {
    await this.todoModel.deleteMany({});
    await this.todoModel.insertMany([
      { description: 'Piedra del alma', isCompleted: true },
      { description: 'Piedra del poder' },
      { description: 'Piedra del tiempo' },
      { description: 'Piedra del espacio' },
      { description: 'Piedra del realidad' },
    ]);

    return { message: 'Database successfully seeded' };
  }
}
