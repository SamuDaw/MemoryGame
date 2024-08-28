import Card from "./Card";
import "./CardContainer.css";
function CardContainer({skins, handleSelect}) {
  return (
    <div className="Card-container">
        {skins.map((skin) => (
            <Card key={skin.id} skin={skin} handleSelect={handleSelect} />
        ))}
    </div>
  );
}

export default CardContainer;