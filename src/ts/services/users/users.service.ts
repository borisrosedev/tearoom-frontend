import ApiDataSource from "../../data-sources/api.datasource"


export default class UsersService {
    hostname = "http://tearoom-alb-1498542559.eu-west-3.elb.amazonaws.com"
    constructor(){}

   
    async register(formData: FormData) {
        const self = this
        const response = await ApiDataSource.send(
            self.hostname + "/api/v1/user",
            formData,
            "mutipart/form-data"
        )
        const jsResponse = await response.json()
        return jsResponse
    }
}