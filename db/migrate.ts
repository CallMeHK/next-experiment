import { Sequelize } from 'sequelize';
import { User, sequelizeInitUser } from './models/user.model';

const sequelize = new Sequelize('postgres://hzjqicog:gUt4lf5kPFYZrXQLiS-2lK4xU4InPe6u@rajje.db.elephantsql.com:5432/hzjqicog')

sequelizeInitUser(sequelize)

const migrate = async () => {
    await sequelize.sync()
    const newUser = await User.create({
        username: 'ty',
        password:'123',
        email: 'ty@ty.com'
    })

    console.log(newUser)
}

migrate()