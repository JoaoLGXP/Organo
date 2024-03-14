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
      <div className="organo-banner-itens-right">
        <img src="/images/logoow.png" alt="" />
      </div>
    </header>
  );
}

export default Banner;
