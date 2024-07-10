import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @MinLength(1)
  description: string;

  @IsOptional()
  isCompleted: boolean;
}
