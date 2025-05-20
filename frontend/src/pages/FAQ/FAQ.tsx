import { Container, Header, Footer } from "@/components/Layout";
import styles from "./FAQ.module.scss";
import { useAccordionData } from "@/hooks";


const FAQ = () => {
  const { accordionItems, isLoading, error } = useAccordionData();
  console.log(accordionItems, isLoading, error);

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
