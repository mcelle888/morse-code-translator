export function createErrorBlock(errorMessage) {
    const errorBlock = document.createElement('div')
    errorBlock.classList.add('error-container')

    const errorMessageElement = document.createElement('p')
    errorMessageElement.textContent = errorMessage

    errorBlock.appendChild(errorMessageElement)
    return errorBlock
}
