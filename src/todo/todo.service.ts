import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoreposity: Repository<Todo>,
  ) {}

findAll(){
    return  this.todoreposity.find()
  }
  create(title:string){
    const todo = new Todo()
    todo.title = title
    return  this.todoreposity.save(todo)
  }

  async update(id:number, isComplted:boolean){
    const todo = await this.todoreposity.findOne({where: {id:id}})
    if(todo){
        todo.isCompleted = isComplted
        return await this.todoreposity.save(todo)
    }
    return null
  }

   delete(id:number){
    return  this.todoreposity.delete(id).then(()=>{})
  }
}
