import Card from './Card';

export default class PokerHand {
    private hand: Card[];

    constructor(hand: Card[]) {
        this.hand = hand;
    }

    getOutcome(): string {
        const ranks = this.hand.map(card => card.rank);
        const rankCounts = this.countRanks(ranks);
        const uniqueSuits = new Set(this.hand.map(card => card.suit));

        const isFlush = uniqueSuits.size === 1;
        const isStraight = this.isStraight(ranks);

        if (isFlush && ranks.includes('A') && ranks.includes('K') && ranks.includes('Q') && ranks.includes('J') && ranks.includes('10')) {
            return 'Роял-флэш';
        }
        if (isFlush && isStraight) {
            return 'Стрит-флэш';
        }
        if (this.hasNOfAKind(rankCounts, 4)) {
            return 'Каре';
        }
        if (this.hasFullHouse(rankCounts)) {
            return 'Фулл-хаус';
        }
        if (isFlush) {
            return 'Флэш';
        }
        if (isStraight) {
            return 'Стрит';
        }
        if (this.hasNOfAKind(rankCounts, 3)) {
            return 'Тройка';
        }
        if (this.hasTwoPairs(rankCounts)) {
            return 'Две пары';
        }
        if (this.hasNOfAKind(rankCounts, 2)) {
            return 'Одна пара';
        }
        return 'Старшая карта';
    }

    private countRanks(ranks: string[]): Record<string, number> {
        return ranks.reduce((acc, rank) => {
            acc[rank] = (acc[rank] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
    }

    private hasNOfAKind(rankCounts: Record<string, number>, n: number): boolean {
        return Object.values(rankCounts).includes(n);
    }

    private hasFullHouse(rankCounts: Record<string, number>): boolean {
        return this.hasNOfAKind(rankCounts, 3) && this.hasNOfAKind(rankCounts, 2);
    }

    private hasTwoPairs(rankCounts: Record<string, number>): boolean {
        return Object.values(rankCounts).filter(count => count === 2).length === 2;
    }

    private isStraight(ranks: string[]): boolean {
        const rankOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const sortedRanks = [...new Set(ranks)].map(rank => rankOrder.indexOf(rank)).sort((a, b) => a - b);

        for (let i = 0; i < sortedRanks.length - 1; i++) {
            if (sortedRanks[i + 1] !== sortedRanks[i] + 1) {
                return false;
            }
        }
        return true;
    }
}