import ButtonInterface from "../../../interfaces/button.interface";
import FieldInterface from "../../../interfaces/field.interface";
import fieldComponent from "../field/field.component";

function formComponent ({ fields, buttons, id, formClassNames }: 
    {
    fields: FieldInterface[], 
    id: string, 
    formClassNames: string, 
    buttons: ButtonInterface[]
}) {
    return(
        ` <form id="login-form" class="${formClassNames ?? ''}">
            <section>
                ${fields.map((el:any) => fieldComponent(el))}
            </section>    
            <section></section>
          </form>

        `
    )
}