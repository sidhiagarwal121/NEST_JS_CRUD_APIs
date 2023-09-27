import { PipeTransform,ArgumentMetadata } from "@nestjs/common/interfaces/features/pipe-transform.interface";
import { TaskStatus } from "../task.model";
import {BadRequestException} from '@nestjs/common'
export class TaskStatusvalidation implements PipeTransform{
    readonly allowedStatuses=[
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE
    ]
    transform(value:any)
    {
        value=value.toUpperCase();
       if(!this.isStatusValid(value))
       {
        throw new BadRequestException(`"${value}" is an invalid status `);

       }
        return value;

    }
    private isStatusValid(status:any)
    {
        const idx=this.allowedStatuses.indexOf(status);
        return idx!==-1;
    }
}