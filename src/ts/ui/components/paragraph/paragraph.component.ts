interface ParagraphComponentInterface {
  
    textContent: string
    href: string
    classNames?: string
    

}

function paragraphComponent(data: ParagraphComponentInterface): string {
    return `
        <p class="${data.classNames ?? ''}">
            ${data.textContent}
            ${data.href ? ` <a href="${data.href}">Cliquez ici</a>` : ''}
        </p>
    `;
}

export default paragraphComponent;
