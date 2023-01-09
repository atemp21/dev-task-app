import { Model, DataTypes, UUIDV4 } from 'sequelize';
import sequelize from '../config/config';

interface INote{
    id: string;
    title: string;
    body: Text;
}

export class Note extends Model<INote> implements INote{
    id!: string;
    title!: string;
    body!: Text;
}

Note.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: true
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        sequelize: sequelize,
        tableName: "notes"
    }
);