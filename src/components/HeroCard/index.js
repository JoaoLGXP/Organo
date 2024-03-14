import "./HeroCard.css";

const HeroCard = ({ nome, imagem, corDeFundo }) => {
  return (
    <a
      href={`https://overwatch.blizzard.com/pt-br/heroes/${nome}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="heroCard">
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
          <img src={imagem} alt={nome} />
        </div>
        <div className="rodape">
          <h4>{nome}</h4>
        </div>
      </div>
    </a>
  );
};

export default HeroCard;
