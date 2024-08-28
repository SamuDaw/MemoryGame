import './Card.css';

function Card({ skin, handleSelect }) {
    const handleClick = (event) => {
        const cardId = event.target.getAttribute('data-card-id');
        console.log('Card clicked:', skin.name);
        handleSelect(cardId);
    };

    return (
        <div className="card" onClick={handleClick} data-card-id={skin.id}>
            <img src={skin.image} alt={skin.name} data-card-id={skin.id} />
            <span data-card-id={skin.id} ><b data-card-id={skin.id}>{skin.name}</b></span>
        </div>
    );
}

export default Card;
