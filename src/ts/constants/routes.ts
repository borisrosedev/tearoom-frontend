import LandingContainer from "../containers/landing/Landing.container";
import LoginContainer from "../containers/login/Login.container";
import landingPage from "../ui/pages/landing/landing.page";
import loginPage from "../ui/pages/login/login.page";

export const ROUTES = {
    landing: {
        path: "",
        ui: landingPage,
        business: LandingContainer,
    },
    login: {
        path: "#login",
        ui: loginPage,
        business: LoginContainer
    },
    register: {
        path: "#register",
        ui: loginPage,
        business: LoginContainer
    }
}