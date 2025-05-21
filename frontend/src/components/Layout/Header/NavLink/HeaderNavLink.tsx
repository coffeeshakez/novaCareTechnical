import { Link } from 'react-router-dom';
import styles from './HeaderNavLink.module.scss';

interface HeaderNavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export const HeaderNavLink = ({ to, children, isActive = false }: HeaderNavLinkProps) => {
  const linkClasses = `${styles.navLink} ${isActive ? styles.active : ''}`;

  return (
    <Link to={to} className={linkClasses}>
      {children}
    </Link>
  );
};

export default HeaderNavLink;
