import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './entities/todo.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class TodosService {
  private readonly logger = new Logger('ProductsService');

  constructor(
    @InjectModel(Todo.name)
    private readonly todoModel: Model<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    await this.todoModel.create(createTodoDto);
    return { ok: true, message: 'ToDo agregado correctamente' };
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const data = await this.todoModel
      .find({})
      .limit(limit)
      .skip(offset)
      .select('-__v');
    return { ok: true, data };
  }

  async findOne(id: string) {
    const data = await this.todoModel.findById(id);
    if (!data)
      throw new NotFoundException({
        ok: false,
        message: 'ToDo no encontrado',
      });
    return { ok: true, data };
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = await this.findOne(id);
    await todo.data.updateOne(updateTodoDto);
    return {
      ok: true,
      message: 'ToDo actualizado correctamente',
    };
  }

  async remove(id: string) {
    const { deletedCount } = await this.todoModel.deleteOne({ _id: id });
    if (deletedCount === 0)
      throw new NotFoundException({
        ok: false,
        message: 'ToDo no encontrado',
      });
    return { ok: true, message: 'ToDo eliminado correctamente' };
  }
}
