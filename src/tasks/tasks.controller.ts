import { Controller,Get,Post,Body ,Query,Param,Delete,Patch,Put, UsePipes, ValidationPipe} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { TaskStatus } from './task.model';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatusvalidation } from './pipes/task-stataus-validation.pipes';

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
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto:CreateTaskDto):Task
    {
        return this.taskService.createTask(createTaskDto)
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
    @Body('status',TaskStatusvalidation)status:TaskStatus):Task{
        return this.taskService.updateTask(id,status);
    }

    
}

