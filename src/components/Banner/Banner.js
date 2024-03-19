import "./Banner.css";

function Banner() {
  return (
    <header className="organo-banner">
      <div className="organo-banner-itens-left">
        <div>
          <img src="/images/logo.png" alt="O logo do Organo" />
        </div>
        <div>
          <h4>Heróis e funções</h4>
          <p>organizados em um só lugar!</p>
        </div>
      </div>
      <a href="https://overwatch.blizzard.com/pt-br/heroes/" target="blank" rel="noreferrer">
        <div className="organo-banner-itens-right">
          <img src="/images/logoow.png" alt="" />
        </div>
      </a>
    </header>
  );
}

export default Banner;
