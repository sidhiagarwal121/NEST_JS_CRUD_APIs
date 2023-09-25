"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const task_model_1 = require("./task.model");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [];
    }
    getTaskById(id) {
        return this.tasks.find(task => task.id == id);
    }
    getAllTask() {
        return this.tasks;
    }
    getTaskWithFilters(filterDto) {
        const { status, search } = filterDto;
        let tasks = this.getAllTask;
        if (status) {
            this.tasks = this.tasks.filter(task => task.status === status);
        }
        if (search) {
            this.tasks = this.tasks.filter(task => task.title.includes(search) || task.description.includes(search));
        }
        return this.tasks;
    }
    createTask(title, description) {
        const id = new Date().toString();
        const task = {
            id,
            title,
            description,
            status: task_model_1.TaskStatus.OPEN
        };
        this.tasks.push(task);
        return;
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    updateTask(id, taskStatus) {
        let task = this.getTaskById(id);
        task.status = taskStatus;
        return task;
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=tasks.service.js.map