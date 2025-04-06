import { OnNavigateType } from "../../custom-types/on-navigate.type";
import BaseContainer from "../../models/BaseContainer.model";



export default class LandingContainer extends BaseContainer {
    constructor(onNavigate: OnNavigateType){
        super(onNavigate)
    }
    onClick(){
        this.onNavigate("#login")
    }
}