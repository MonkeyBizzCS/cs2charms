export interface Rarity{
    id: number;
    name: string;
    gradientStyle: string;
}

export function getRarity(rarityId: number): Rarity {
    switch (rarityId) {
        case 6:
            return { id: rarityId, name: 'Extraordinary', gradientStyle: 'linear-gradient(0deg, #1e1e1e 35%, #EB4B4B 100%' };
        case 5:
            return { id: rarityId, name: 'Exotic', gradientStyle: 'linear-gradient(0deg, #1e1e1e 35%, #D300E6 100%)'};
        case 4:
            return { id: rarityId, name: 'Remarkable', gradientStyle: 'linear-gradient(0deg, #1e1e1e 35%, #8847FF 100%)'};
    }
    return { id: rarityId, name: 'High Grade', gradientStyle: 'linear-gradient(0deg, #1e1e1e 35%, #4B69FF 100%)'};
}