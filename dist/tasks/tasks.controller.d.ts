import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { TaskStatus } from './task.model';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getTaskById(id: string): Task;
    getAllTasks(): Task[];
    getTasks(filterDto: GetTasksFilterDto): Task[];
    createTask(createTaskDto: CreateTaskDto): Task;
    deleteTask(id: string): string;
    updateAllTask(id: string, body: any): string;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
