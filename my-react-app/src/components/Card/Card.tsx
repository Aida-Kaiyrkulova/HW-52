import React from 'react';

interface CardProps {
    rank: string;
    suit: 'diams' | 'hearts' | 'clubs' | 'spades';
}

const CardItem: React.FC<CardProps> = ({ rank, suit }) => {
    const suitSymbols: Record<string, string> = {
        diams: '♦',
        hearts: '♥',
        clubs: '♣',
        spades: '♠',
    };

    return (
        <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suitSymbols[suit]}</span>
        </span>
    );
};

export default CardItem;