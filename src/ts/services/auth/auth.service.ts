import ApiDataSource from "../../data-sources/api.datasource";



class AuthService {
    hostname = "http://localhost:3000"
    constructor(){}
    async login({ email, password}: { email: string, password: string }) {
        const self = this
        const token = await ApiDataSource.send(
            self.hostname + "/api/v1/login",
            {email, password}
        )
    }
}

export default AuthService