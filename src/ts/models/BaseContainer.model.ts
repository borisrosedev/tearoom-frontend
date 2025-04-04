import { OnNavigateType } from "../custom-types/on-navigate.type"

export default class BaseContainer {
    onNavigate!: OnNavigateType
    constructor(onNavigate:OnNavigateType){
        this.onNavigate = onNavigate
    }
}