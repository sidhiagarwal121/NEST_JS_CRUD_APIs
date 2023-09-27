import { Injectable, NotFoundException,BadRequestException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TasksService {
    private tasks:Task[]=[];
    getTaskById(id:string):Task
    {
        const found=this.tasks.find(task=>task.id==id);
        if(!found)
        {
            throw new NotFoundException;
        }
        else{
            return found;
        }

    }
    getAllTask():Task[]
    {
        return this.tasks;
    }
    getTaskWithFilters(filterDto:GetTasksFilterDto):Task[]
    {
        const{status,search}=filterDto;
        let tasks=this.getAllTask;
        if(status)
        {
            this.tasks=this.tasks.filter(task=>task.status===status);

        }
        if(search)
        {
            this.tasks=this.tasks.filter(task=>task.title.includes(search)||task.description.includes(search));

        }
        return this.tasks;


    }
    createTask(createTaskDto:CreateTaskDto):Task
    {
        const id=new Date().toString()
        const{title,description}=createTaskDto
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
        const found=this.getTaskById(id);
        this.tasks=this.tasks.filter(task=>task.id!==id)
    }
    updateTask(id:string,taskStatus:TaskStatus):Task
    {
        let task=this.getTaskById(id);
        task.status=taskStatus
        return task
    }
    

}
