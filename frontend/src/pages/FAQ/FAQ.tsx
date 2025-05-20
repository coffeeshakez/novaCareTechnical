import { Container, Header, Footer } from "@/components/Layout";
import styles from "./FAQ.module.scss";


const FAQ = () => {

  return (
    <div className={styles.page}>
      <Header />
      
      <main className={styles.main}>
        <Container>
          <div>
            <h1>FAQ</h1>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
