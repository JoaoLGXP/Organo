import HeroCard from "../HeroCard";
import "./Role.css";
import hexToRgba from 'hex-to-rgba';

const Role = (props) => {
  const css = { backgroundColor: hexToRgba(props.corPrimaria, "0.80") };
  const cssBorder = { borderColor: props.corPrimaria };

  return (
    props.heroes.length > 0 && <section className="role" style={css}>
      <input onChange={event => props.changeColor(event.target.value, props.name)} value={props.corPrimaria} type="color" className="input-color" />
      <h3 style={cssBorder}>{props.name}</h3>
      <div className="heroes-group">
        {props.heroes.map((hero) => {
          return <HeroCard key={hero.id} corDeFundo={props.corPrimaria} id={hero.id} nome={hero.name} imagem={hero.image} handleDelete={props.handleDelete}/>
        })}
      </div>
    </section>
  );
};

export default Role;
