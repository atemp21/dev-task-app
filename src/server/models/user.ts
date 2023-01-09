import {Model, DataTypes, UUIDV4 } from 'sequelize';
import sequelize from '../config/config';

interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class User extends Model<IUser> implements IUser{
    id!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;

    getFullName(){
        return [this.firstName, this.lastName].join(' ');
    }
}

User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
      {
        sequelize: sequelize,
        tableName: 'users'
      }    
  );