import { Link } from 'react-router-dom';
import { Header, Footer, Container } from '@/components/Layout';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <main className={styles.main}>
        <Container>
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>NovaCare</h1>
            <p className={styles.heroText}>
              Providing star class consultants to help you grow your business.
            </p>
            <div className={styles.heroActions}>
              <Link to="/faq" className={styles.faqLink}>Visit our FAQ</Link>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
