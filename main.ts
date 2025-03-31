import loginPage from './src/ts/ui/pages/login/login.page'
import './styles.scss'
const root = document.getElementById('root') as HTMLElement

root.innerHTML += loginPage()

const email = document.getElementById('email') as HTMLInputElement
const password = document.getElementById('password') as HTMLInputElement

email?.addEventListener('input', function(e:any){
    
    setTimeout(() => {

        // après 10 secondes ce qui est dans le corps de cette fonction
        // va s'exécuter
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ email: e.target.value })
        })

    }, 10000)

})


password.addEventListener('input', function(e:any){

    fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({ password : e.target.value })
    })

})

