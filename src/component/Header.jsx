import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Gerenciador de contatos</h1>
      <p>
        Projeto de <a href="https://github.com/PhilipeMuzzi">Philipe Muzzi</a>
      </p>
    </div>
  );
}

export default Header;
