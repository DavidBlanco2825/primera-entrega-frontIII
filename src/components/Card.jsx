import '../Card.css'

function Card({ data }) {
  const {name, color} = data;
  return (
    <div className="card">
      <p>Hola <strong>{name}</strong>!</p>
      <p>Sabemos que tu color favorito es:</p>
      <div className="color-box" style={{ backgroundColor: color }}>
        {secondInput}
      </div>
    </div>
  );
}

export default Card;
