import { Sequelize, Model, DataTypes } from 'sequelize';

class User extends Model {
    public id!: number;
    public username!: string;
    public password!: string;
    public email!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

const sequelizeInitUser = (sequelize: Sequelize) => {
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: new DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: new DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: new DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize, tableName: 'users'
})
}

export { User, sequelizeInitUser }