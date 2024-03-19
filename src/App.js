import { useState } from "react";
import Banner from "./components/Banner/Banner";
import OrganoForm from "./components/OrganoForm";
import Role from "./components/Role";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [roles, setRoles] = useState([
    {
      id: uuidv4(),
      nome: "Tank",
      corPrimaria: "#1f62c7",
    },
    {
      id: uuidv4(),
      nome: "Dano",
      corPrimaria: "#b9201d",
    },
    {
      id: uuidv4(),
      nome: "Suporte",
      corPrimaria: "#23cc59",
    },
  ]);

  const [heroes, setHeroes] = useState([]);

  const handleNewRegisteredHero = (hero) => {
    setHeroes([...heroes, hero]);
  };

  function deleteHero(id) {
    setHeroes(heroes.filter((hero) => hero.id !== id));
  }

  function changeColorRole(cor, nome) {
    setRoles(
      roles.map((role) => {
        if (role.nome === nome) {
          role.corPrimaria = cor;
        }
        return role;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <OrganoForm
        roles={roles.map((role) => role.nome)}
        handleRegisteredHero={(hero) => handleNewRegisteredHero(hero)}
      />
      {roles.map((role) => (
        <Role
          changeColor={changeColorRole}
          key={role.id}
          name={role.nome}
          corPrimaria={role.corPrimaria}
          corSecundaria={role.corSecundaria}
          heroes={heroes.filter((hero) => hero.role === role.nome)}
          handleDelete={deleteHero}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
