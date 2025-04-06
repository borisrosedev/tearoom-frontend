import { OnNavigateType } from "../../custom-types/on-navigate.type";
import BaseContainer from "../../models/BaseContainer.model";
import UsersService from "../../services/users/users.service";

export default class LoginContainer extends BaseContainer {
    isLoggingIn = true
    
    constructor(onNavigate: OnNavigateType) {
        super(onNavigate)
        const loginForm = document.getElementById('login-form') as HTMLFormElement
        loginForm.onsubmit = this.onSubmit
    }

    async onSubmit (e:any) {
        e.preventDefault()
        const emailInputValue = (document.getElementById('email') as HTMLInputElement).value 
        const passwordInputValue = (document.getElementById('password') as HTMLInputElement).value 

        if(!(emailInputValue && passwordInputValue)){
            return
        }

        if(this.isLoggingIn){
            const firstNameInputValue = (document.getElementById('firstname') as HTMLInputElement).value 
            const lastNameInputValue = (document.getElementById('lastname') as HTMLInputElement).value 
            
          
        }
      
    }
}