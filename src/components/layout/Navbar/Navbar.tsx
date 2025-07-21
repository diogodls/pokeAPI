import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.image} src={"/logo.png"} alt="logo" />

      <div className={styles.buttonGroup}>
        <button></button>
      </div>
    </nav>
  );
}

export default Navbar;