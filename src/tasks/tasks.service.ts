import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
    private tasks:Task[]=[];
    getTaskById(id:string):Task
    {
        return this.tasks.find(task=>task.id==id);

    }
    getAllTask():Task[]
    {
        return this.tasks;
    }
    createTask(title:string,description:string):Task
    {
        const id=new Date().toString()
        const task:Task={
            id,
            title,
            description,
            status:TaskStatus.OPEN

        }
        this.tasks.push(task);
        return 
    }
    deleteTask(id:string)
    {
        this.tasks=this.tasks.filter(task=>task.id!==id)
    }
    updateTask(id:string,taskStatus:TaskStatus):Task
    {
        let task=this.getTaskById(id);
        task.status=taskStatus
        return task
    }
    

}
