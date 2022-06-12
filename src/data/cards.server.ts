export type CardContent = {
    title: string;
    body: string;
};

export async function getCards(): Promise<Array<CardContent>> {
    const response = await fetch('https://frontend2022-kv.philipschm1tt.workers.dev/api');
    const data = await response.json();

    return data as Array<CardContent>;
}

export async function addCard(card: CardContent): Promise<void> {
    const currentCards = await getCards();
    const newCards = currentCards.concat(card);

    await fetch('https://frontend2022-kv.philipschm1tt.workers.dev/api', {
        method: 'PUT',
        body: JSON.stringify(newCards)
    })
}
