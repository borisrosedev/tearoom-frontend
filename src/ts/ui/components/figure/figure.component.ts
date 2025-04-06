function figureComponent ( { id, src, name, url, alt }: any) {
    return(
        `
            <figure id="${id}">
                <img src="${src ?? url}" alt="${alt ?? name}" />
            </figure>
        
        `
    )
}