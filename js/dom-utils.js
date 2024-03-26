export function populateErrorBlock(errorMessage, container) {
    const errorContainer = document.querySelector(container);

    if (errorContainer) {
        const errorMessageElement = document.createElement('p');
        errorMessageElement.textContent = errorMessage;

        // clear old error message
        errorContainer.innerHTML = '';
        // append to error-container
        errorContainer.appendChild(errorMessageElement);
    } else {
        throw new Error('Error container not found');
    }
}