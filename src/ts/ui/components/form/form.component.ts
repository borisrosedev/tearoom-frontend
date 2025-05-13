import ButtonInterface from "../../../interfaces/button.interface";
import FieldInterface from "../../../interfaces/field.interface";
import buttonComponent from "../button/button.component";
import fieldComponent from "../field/field.component";

function formComponent ({ fields, buttons, id, formClassNames }: 
    {
    fields: FieldInterface[], 
    id: string, 
    buttons: ButtonInterface[]
    formClassNames?: string, 
}) {
    return(
        ` 
            <form id="login-form" class="${formClassNames ?? ''}">
                <section class="login-form__fields-section">
                    ${fields.map((el:any) => fieldComponent(el)).join("")}
                </section>    
                <section class="login-form__buttons-section">
                    ${buttons.map((el:any) => buttonComponent(el)).join("")}
                </section>
            </form>

        `
    )
}

export default formComponent