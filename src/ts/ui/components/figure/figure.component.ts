export default function figureComponent ( { id, src, name, url, alt, classNames }: any) {
    return(
        `
            <figure id="${id}" class="animate__animated ${ classNames ?? ''}">
                <img src="${src ?? url}" alt="${alt ?? name}" />
            </figure>
        
        `
    )
}