import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'server/entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll() {
    return this.todosRepository.find();
  }

  createTodo(todo: Todo): Promise<Todo> {
    return this.todosRepository.save(todo);
  }

  updateTodoToComplete(givenId: number, completed: boolean) {
    return this.todosRepository.update({ id: givenId }, { isComplete: completed });
  }
}
