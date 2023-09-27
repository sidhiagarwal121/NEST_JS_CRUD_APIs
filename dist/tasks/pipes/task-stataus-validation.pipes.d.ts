import { PipeTransform } from "@nestjs/common/interfaces/features/pipe-transform.interface";
import { TaskStatus } from "../task.model";
export declare class TaskStatusvalidation implements PipeTransform {
    readonly allowedStatuses: TaskStatus[];
    transform(value: any): any;
    private isStatusValid;
}
