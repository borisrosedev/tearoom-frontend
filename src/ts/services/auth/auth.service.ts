import ApiDataSource from "../../data-sources/api.datasource";

class AuthService {
    serverOrigin = "http://tearoom-alb-1498542559.eu-west-3.elb.amazonaws.com"
    constructor(){}
    async login({ email, password }: { email: string, password: string }) {
        const self = this
        try {
            const { token } = await ApiDataSource.send(
                self.serverOrigin + "/api/v1/user/login",
                {email, password}
            )
            localStorage.setItem('tearoom-token', token)
            console.log("✅[AUTH-SERVICE: 🔐 LOCAL-STORAGE]: TOKEN", localStorage.getItem('tearoom-token'))
        } catch(err) {
            console.log("❌[AUTH-SERVICE: CATCH ]", err)
        }
       
    }
}

export default AuthService