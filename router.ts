import { ROUTES } from "./src/ts/constants/routes";
import { OnNavigateType } from "./src/ts/custom-types/on-navigate.type";


declare global {
    interface Window {
        onNavigate: OnNavigateType
    }
}

window.onNavigate = router


export default function router (h: string) {
    console.log('router', h)
    window.history.pushState({}, "", window.location.pathname + h)
    const ROOT = document.getElementById('root') as HTMLElement;
    ROOT.innerHTML = ""
    switch(h){
        case ROUTES.landing.path:
            console.log('landing path')
            ROOT.innerHTML =  ROUTES.landing.ui()
            new ROUTES.landing.business(window.onNavigate)
            break;
        case ROUTES.login.path:
            console.log('login path')
            ROOT.innerHTML = ROUTES.login.ui()
            new ROUTES.login.business(window.onNavigate, true)
            break;
        case ROUTES.register.path:
            console.log('register path')
            ROOT.innerHTML = ROUTES.register.ui()
            new ROUTES.register.business(window.onNavigate, false)
            break;
        default:
            break;
    }
}