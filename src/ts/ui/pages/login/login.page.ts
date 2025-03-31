export default function loginPage () {
    return(
        `
            <main>
                <form id="login-form">
                    <section>
                        <article>
                            <label  for="email"></label>
                            <input id="email" class="input is-primary" type="email" placeholder="Entrer votre identifiant"/>
                        </article>
                         <article>
                            <label for="password"></label>
                            <input class="input is-primary" id="password" type="password" placeholder="Entrer votre mot de passe"/>
                        </article>
                    </section>
                    <section>
                        <button class="button is-primary">Valider</button>
                        <button class="button is-danger">Réinitialiser</button>
                    </section>
                
                </form>
            </main>
        `
    )
}