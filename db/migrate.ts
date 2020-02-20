import { Sequelize } from 'sequelize';
import { User, sequelizeInitUser } from './models/user.model';

const sequelize = new Sequelize('postgres://hzjqicog:gUt4lf5kPFYZrXQLiS-2lK4xU4InPe6u@rajje.db.elephantsql.com:5432/hzjqicog')

sequelizeInitUser(sequelize)

const migrate = async () => {
    const rand = Math.floor(Math.random() * 100000000)
    await sequelize.sync()
    const newUser = await User.create({
        username: 'ty+' + rand,
        password: '123',
        email: 'ty+' + rand + '@ty.com'
    })

    console.log('created:', newUser.id, newUser.username)

    const findUser = await User.findByPk(1)
    if (findUser !== null) {
        console.log('found:', findUser.id, findUser.username)
    }
}

migrate()