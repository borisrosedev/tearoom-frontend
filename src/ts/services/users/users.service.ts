import ApiDataSource from "../../data-sources/api.datasource"


export default class UsersService {
    hostname = "http://localhost:3000"
    constructor(){}
    async register({ email, password, photo, firstname, lastname }: { email: string, password: string, firstname:string, lastname: string, photo?: string }) {
        const self = this
        const token = await ApiDataSource.send({
            url: self.hostname + "/api/v1/register",
            data: { email, password, firstname, lastname, photo },
            method: "POST"
        })
    }
}