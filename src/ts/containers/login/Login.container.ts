import { OnNavigateType } from "../../custom-types/on-navigate.type";
import BaseContainer from "../../models/BaseContainer.model";
import AuthService from "../../services/auth/auth.service";
import UsersService from "../../services/users/users.service";
import formComponent from "../../ui/components/form/form.component";
import paragraphComponent from "../../ui/components/paragraph/paragraph.component";

export default class LoginContainer extends BaseContainer {
    isLoggingIn!: boolean
    authService: AuthService
    usersService: UsersService
    loginForm: HTMLFormElement
    
    constructor(onNavigate: OnNavigateType, isLoggingIn: boolean = true) {
        super(onNavigate)
        this.isLoggingIn = isLoggingIn
        this.authService = new AuthService()
        this.usersService = new UsersService()
        
        const loginFormSection = document.getElementById('login-form-section') as HTMLElement
        
        const formData = {
            id: "login-form",
            formClassNames: "",
            fields: [
                {
                    id: "email",
                    type: "email",
                    classNames: "is-primary",
                    placeholder: "Entrer votre email"
                },
                {
                    id: "password",
                    classNames: "is-primary",
                    type: "password",
                    placeholder: "Entrer votre mot de passe"
                }
            ],
            buttons: [
                {
                    id: "submit-btn",
                    classNames: "button is-primary",
                    type: "submit",
                    textContent: "Valider"
                },
                {
                    id: "reset-btn",
                    classNames: "button is-danger",
                    type: "reset",
                    textContent: "Réinitialiser"
                }
            ] as any[]
        }

        if(!this.isLoggingIn) {
            formData.fields.push({
                id: "firstname",
                type: "text",
                placeholder: "Entrer votre prénom",
                classNames: "is-info",

            }, {
                id: "lastname",
                type: "text",
                placeholder: "Entrer votre nom",
                classNames: "is-info",
                
            })

           
        }


        loginFormSection.innerHTML += formComponent(formData)

        if(this.isLoggingIn) {
            loginFormSection.innerHTML += paragraphComponent({ 
                textContent: "Pas encore inscrit(e) ? ", 
                href: "#register"
            })
        } else {
            loginFormSection.innerHTML += paragraphComponent({ 
                textContent: "Déjà inscrit(e) ?", 
                href: "#login"
            })
        }


        this.loginForm = document.getElementById('login-form') as HTMLFormElement
        this.loginForm.onsubmit = this.onSubmit.bind(this)
    }

    async onSubmit (e:any) {
        e.preventDefault()
        const emailInputValue = (document.getElementById('email') as HTMLInputElement).value 
        const passwordInputValue = (document.getElementById('password') as HTMLInputElement).value 

        if(!(emailInputValue && passwordInputValue)){
            console.log('no email and password value')
            return

        } 

        if(!this.isLoggingIn){
            console.log('is registering')
            const firstNameInputValue = (document.getElementById('firstname') as HTMLInputElement).value 
            const lastNameInputValue = (document.getElementById('lastname') as HTMLInputElement).value 
            if (!firstNameInputValue && !lastNameInputValue) {
                console.log('no firstname and lastname value')
                return 
            } else {
                const form = new FormData(this.loginForm)
                await this.usersService.register(form)
            }
            

        } else {
            await this.authService.login({ email: emailInputValue, password: passwordInputValue})
        }

        


      
    }
}