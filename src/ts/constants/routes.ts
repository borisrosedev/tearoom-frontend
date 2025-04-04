import LoginContainer from "../containers/login/Login.container";
import loginPage from "../ui/pages/login/login.page";

export const ROUTES = {
    landing: {
        path: "",
        ui: "",
        business: "",
    },
    login: {
        path: "#login",
        ui: loginPage,
        business: LoginContainer
    }
}