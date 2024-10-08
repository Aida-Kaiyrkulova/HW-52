import Card from './Card';

export default class CardDeck {
    public cards: Card[];

    constructor() {
        this.cards = [];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits: ('diams' | 'hearts' | 'clubs' | 'spades')[] = ['diams', 'hearts', 'clubs', 'spades'];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(rank, suit)); // Создание экземпляра Card
            }
        }
    }

    getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(randomIndex, 1)[0];
    }

    getCards(howMany: number): Card[] {
        return Array.from({ length: howMany }, () => this.getCard());
    }
}