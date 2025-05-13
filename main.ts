import router from './router'
import './styles.scss'


window.onpopstate = () => router(window.location.hash)

console.log('h')

router(window.location.hash)