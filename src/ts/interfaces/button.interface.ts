export default interface ButtonInterface {
    id: string
    type?: 'submit' | 'reset' | 'button'
    textContent: string
    classNames?: string
}