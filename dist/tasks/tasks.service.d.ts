import { Task, TaskStatus } from './task.model';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksService {
    private tasks;
    getTaskById(id: string): Task;
    getAllTask(): Task[];
    getTaskWithFilters(filterDto: GetTasksFilterDto): Task[];
    createTask(createTaskDto: CreateTaskDto): Task;
    deleteTask(id: string): void;
    updateTask(id: string, taskStatus: TaskStatus): Task;
}
