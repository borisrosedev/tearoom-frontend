import ButtonInterface from "../../../interfaces/button.interface";

export default function buttonComponent ({ id ,  textContent, type, classNames }:ButtonInterface){
    return(
        `
            <button 
                id="${id}" 
                type="${type ?? 'button'}"
                class="button ${classNames ?? ''}"
            >${textContent}</button>
        
        `
    )
}