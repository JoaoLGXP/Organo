import "./HeroCard.css";
import { IoMdCloseCircle } from "react-icons/io";

const HeroCard = ({ hero, id, nome, imagem, corDeFundo, handleDelete }) => {
  return (
      <div className="heroCard">
        <IoMdCloseCircle 
          size={25} 
          color="#000" 
          className="deletar" 
          onClick={() => handleDelete(id)}
        />
        <a
          href={`https://overwatch.blizzard.com/pt-br/heroes/${nome}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome} />
          </div>
        </a>

        <div className="rodape">
          <h4>{nome}</h4>
          <p className="id">{id}</p>
        </div>
      </div>
  );
};

export default HeroCard;
