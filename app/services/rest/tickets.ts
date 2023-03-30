
export function getTicketById<T>(id): Promise<T[]> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket').then((response) => response.json())
        .then((data: T[]) => {
            return data;
        });
}

export function postTicketData(postData): Promise<{ success: boolean }> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket').then((response) => response.json())
        .then((data: { success: boolean }) => {
            return data;
        });
}

