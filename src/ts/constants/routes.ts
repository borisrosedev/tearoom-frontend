import LoginContainer from "../containers/login/Login.container";
import landingPage from "../ui/pages/landing/landing.page";
import loginPage from "../ui/pages/login/login.page";

export const ROUTES = {
    landing: {
        path: "",
        ui: landingPage,
        business: "",
    },
    login: {
        path: "#login",
        ui: loginPage,
        business: LoginContainer
    }
}