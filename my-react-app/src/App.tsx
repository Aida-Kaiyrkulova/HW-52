import { useState } from 'react';
import CardDeck from './lib/CardDeck';
import Card from './components/Card/Card.tsx';
import "./cards.css";

const App = () => {
    const [cards, setCards] = useState<Card[]>([]);

    const dealCards = () => {
        const deck = new CardDeck();
        const dealtCards = deck.getCards(5);
        setCards(dealtCards);
    };

    return (
        <div>
            <button onClick={dealCards}>Раздать карты</button>
            {cards.length > 0 && (
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <Card key={index} rank={card.rank} suit={card.suit} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;
