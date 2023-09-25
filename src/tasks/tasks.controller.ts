import { Controller,Get,Post,Body ,Query,Param,Delete,Patch,Put} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { TaskStatus } from './task.model';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService:TasksService){};
    @Get('/:id')
    getTaskById(@Param('id')id:string):Task
    {
        return this.taskService.getTaskById(id)

    }
    @Get()
    getAllTasks():Task[]
    {
        return this.taskService.getAllTask();
    }
    @Get()
    getTasks(@Query() filterDto:GetTasksFilterDto):Task[]
    {
        if(Object.keys(filterDto).length)
        {
            return this.taskService.getTaskWithFilters(filterDto);
        }
        else
        {
            return this.taskService.getAllTask();
        }
    }
    @Post()
    createTask(@Body('title')title:string,@Body('description')description:string):Task
    {
        return this.taskService.createTask(title,description)
    }
    @Delete('/:id')
    deleteTask(@Param('id')id:string)
    {
        this.taskService.deleteTask(id);
        return `task ${id} is deleted successfully`;
    }
    @Put(':id')
    updateAllTask(@Param('id') id: string, @Body() body: any): string {
      return `Updated resource with ID ${id}. Updated data: ${JSON.stringify(body)}`;
    }
    
    @Patch('/:id')
    updateTaskStatus(@Param('id') id:string,
    @Body('status')status:TaskStatus){
        return this.taskService.updateTask(id,status);
    }

    
}

