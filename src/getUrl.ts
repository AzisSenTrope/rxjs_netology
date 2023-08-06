export const ELEMENTS = {
    GIT: 'git',
    GITHUB: 'github',
    QUERY: 'query',
};


export function getUrl(event: Event) {
    const formElements = (event.target as HTMLFormElement).elements;
    const query = ([...formElements] as HTMLInputElement[]).find((formElement) => {
        return formElement.id === ELEMENTS.QUERY;
    }).value;
    const type = ([...formElements] as HTMLInputElement[]).find((formElement) => {
       return formElement.name === ELEMENTS.GIT && formElement.checked;
    });

    if (type.id === ELEMENTS.GITHUB) {
        return `https://api.github.com/search/repositories?q=${query}`;
    }

    return `https://gitlab.com/api/v4/projects?search=${query}`;
}

