import { OnNavigateType } from "../../custom-types/on-navigate.type";
import BaseContainer from "../../models/BaseContainer.model";
import buttonComponent from "../../ui/components/button/button.component";
import figureComponent from "../../ui/components/figure/figure.component";

export default class LandingContainer extends BaseContainer {
    constructor(onNavigate: OnNavigateType){
        super(onNavigate)

        const landingSection = document.getElementById('landing-main-section') as HTMLElement
        landingSection.innerHTML += figureComponent({
            id: "landing-logo",
            classNames: "landing__figure animate__fadeInDown",
            src: "/assets/images/logo.webp",
            alt: "Image du logo de TeaRoom"
        })

        landingSection.innerHTML += buttonComponent({
            id: "landing-button",
            textContent: "Découvrir notre salon de thé",
            classNames: "is-primary animate__fadeInDown"
        })

        const landingButton = document.getElementById('landing-button') as HTMLButtonElement
        console.log(landingButton)
        landingButton.onclick = this.onClick.bind(this)
    
    }
    
    onClick(){
        this.onNavigate("#login")
    }
}