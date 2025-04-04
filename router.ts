import { ROUTES } from "./src/ts/constants/routes";
import { OnNavigateType } from "./src/ts/custom-types/on-navigate.type";


declare global {
    interface Window {
        onNavigate: OnNavigateType
    }
}

window.onNavigate = router


export default function router (h: string) {

    window.history.pushState({}, "", window.location.pathname + h)
    const ROOT = document.getElementById('root') as HTMLElement;
    switch(h){
        case ROUTES.landing.path:
            ROOT.innerHTML =   ""
            break;
        case ROUTES.login.path:
            ROOT.innerHTML =   ROUTES.login.ui()
            new ROUTES.login.business(window.onNavigate)
            break;
        default:
            break;
    }
}