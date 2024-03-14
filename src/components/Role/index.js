import HeroCard from "../HeroCard";
import "./Role.css";

const Role = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  const cssBorder = { borderColor: props.corPrimaria };

  return (
    props.heroes.length > 0 && <section className="role" style={css}>
      <h3 style={cssBorder}>{props.name}</h3>
      <div className="heroes-group">
        {props.heroes.map((hero) => (
          <HeroCard key={hero.name} corDeFundo={props.corPrimaria} nome={hero.name} imagem={hero.image} />
        ))}
      </div>
    </section>
  );
};

export default Role;
