"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatusvalidation = void 0;
const task_model_1 = require("../task.model");
const common_1 = require("@nestjs/common");
class TaskStatusvalidation {
    constructor() {
        this.allowedStatuses = [
            task_model_1.TaskStatus.OPEN,
            task_model_1.TaskStatus.IN_PROGRESS,
            task_model_1.TaskStatus.DONE
        ];
    }
    transform(value) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`"${value}" is an invalid status `);
        }
        return value;
    }
    isStatusValid(status) {
        const idx = this.allowedStatuses.indexOf(status);
        return idx !== -1;
    }
}
exports.TaskStatusvalidation = TaskStatusvalidation;
//# sourceMappingURL=task-stataus-validation.pipes.js.map