import styles from './Footer.module.scss';

export const Footer = ({ 
  year = new Date().getFullYear() 
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyright}>
            &copy; {year} NovaCare. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
