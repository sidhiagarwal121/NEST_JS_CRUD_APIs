import { Task, TaskStatus } from './task.model';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
export declare class TasksService {
    private tasks;
    getTaskById(id: string): Task;
    getAllTask(): Task[];
    getTaskWithFilters(filterDto: GetTasksFilterDto): Task[];
    createTask(title: string, description: string): Task;
    deleteTask(id: string): void;
    updateTask(id: string, taskStatus: TaskStatus): Task;
}
