import FieldInterface from "../../../interfaces/field.interface";

export default function fieldComponent ({ id, placeholder , type, classNames}: FieldInterface) {
    return(
        `
            <article>
                <label  for="${id}"></label>
                <input 
                    id="${id}" 
                    class="input ${classNames ?? ''}" 
                    type="${type ?? 'text'}" 
                    placeholder="${placeholder}"
                />
            </article>
        
        
                  
        
        `
    )
}