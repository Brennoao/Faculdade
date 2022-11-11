import User from "App/Models/User"
import UserValidator from "App/Validators/UserValidator"

export default class UsersController {
    async store ({request}) {
        const data = await request.validate(UserValidator)
        return await User.create(data)
    }

    async login ({request, auth}) {
        const {email, password} = request.body()

        return await auth.use('api').attempt(email, password)
    }
}
