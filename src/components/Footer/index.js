import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://github.com/JoaoLGXP" target="_blank" rel="noreferrer">
              <img src="./images/github1.png" alt="Github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-lucas-ribeiro-gxp/" target="blank" rel="noreferrer">
              <img src="/images/linkedin.png" alt="Linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/joaolucas0811/" target="blank" rel="noreferrer">
              <img src="./images/ig.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="./images/logo.png" alt="Logo Organo" />
      </section>
      <section>
        <p>
            Desenvolvido por João Lucas
        </p>
      </section>
    </footer>
  );
};

export default Footer;
