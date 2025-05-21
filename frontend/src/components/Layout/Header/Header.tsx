import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { NovaCareIcon } from './NovaCareIcon';
import { HeaderNavLink } from './NavLink/HeaderNavLink';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink} aria-label="NovaCare Home">
            <NovaCareIcon className={styles.logoSvg}/>
          </Link>
        </div>
        <nav className={styles.navigation}>
          <HeaderNavLink to="/faq">/ FAQ</HeaderNavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
