import React, { useState } from 'react';
import CardDeck from './lib/CardDeck';
import CardItem from './components/Card/Card.tsx';
import Card from './lib/Card.ts';
import PokerHand from './lib/PokerHand';
import './cards.css';

const App: React.FC = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [handOutcome, setHandOutcome] = useState<string>('');

    const dealCards = () => {
        const deck = new CardDeck();
        const dealtCards = deck.getCards(5);
        setCards(dealtCards);

        const pokerHand = new PokerHand(dealtCards);
        setHandOutcome(pokerHand.getOutcome());
    };

    return (
        <div>
            <button onClick={dealCards}>Раздать карты</button>
            {cards.length > 0 && (
                <div>
                    <div className="playingCards faceImages">
                        {cards.map((card, index) => (
                            <CardItem
                                key={index}
                                rank={card.rank}
                                suit={card.suit}
                            />
                        ))}
                    </div>
                    <div className="handOutcome">
                        <strong>Комбинация:</strong> {handOutcome}
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;