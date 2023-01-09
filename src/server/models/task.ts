import {Model, DataTypes, UUIDV4} from 'sequelize';
import sequelize from '../config/config';

enum TaskPriority {
    low,
    medium,
    high
}

interface ITask{
    id: string;
    description: string;
    start: Date;
    duration: number;
    completed: boolean;
    priority: TaskPriority
}

export class Task extends Model<ITask> implements ITask{
    id: string;
    description: string;
    start: Date;
    duration: number;
    completed: boolean;
    priority: TaskPriority;
}

Task.init(
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        start:{
            type: DataTypes.DATE,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        completed:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        priority: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        sequelize: sequelize,
        tableName: "tasks"
    }
);