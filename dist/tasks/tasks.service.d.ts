import { Task, TaskStatus } from './task.model';
export declare class TasksService {
    private tasks;
    getTaskById(id: string): Task;
    getAllTask(): Task[];
    createTask(title: string, description: string): Task;
    deleteTask(id: string): void;
    updateTask(id: string, taskStatus: TaskStatus): Task;
}
