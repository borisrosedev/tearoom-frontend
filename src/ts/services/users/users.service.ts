import ApiDataSource from "../../data-sources/api.datasource"


export default class UsersService {
    hostname = "http://localhost:3000"
    constructor(){}

    async login({ email, password }: any) {
        const self = this
        const response = await ApiDataSource.send(
            self.hostname + "/api/v1/register",
            { email, password }
        )
        const token = await response.json()
        localStorage.setItem('tearoom:token', token)
    }
    async register(formData: FormData) {
        const self = this
        const response = await ApiDataSource.send(
            self.hostname + "/api/v1/register",
            formData,
            "mutipart/form-data"
        )
        const jsResponse = await response.json()
        return jsResponse
    }
}