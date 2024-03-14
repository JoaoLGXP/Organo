import { useState } from "react";
import Banner from "./components/Banner/Banner";
import OrganoForm from "./components/OrganoForm";
import Role from "./components/Role";
import Footer from "./components/Footer";

function App() {
  const roles = [
    {
      nome: "Tank",
      corPrimaria: "#1f62c7",
      corSecundaria: "#7bd7ff",
    },
    {
      nome: "Dano",
      corPrimaria: "#b9201d",
      corSecundaria: "#ff7f85",
    },
    {
      nome: "Suporte",
      corPrimaria: "#23cc59",
      corSecundaria: "#7affc1",
    },
  ];

  const [heroes, setHeroes] = useState([]);

  const handleNewRegisteredHero = (hero) => {
    setHeroes([...heroes, hero]);
  };

  return (
    <div className="App">
      <Banner />
      <OrganoForm
        roles={roles.map(role => role.nome)}
        handleRegisteredHero={(hero) => handleNewRegisteredHero(hero)}
      />
      {roles.map(role => 
        <Role 
          key={role.nome} 
          name={role.nome} 
          corPrimaria={role.corPrimaria} 
          corSecundaria={role.corSecundaria}
          heroes = {heroes.filter(hero => hero.role === role.nome)}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
