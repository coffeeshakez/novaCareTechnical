import { Container, Header, Footer } from "@/components/Layout";
import styles from "./FAQ.module.scss";
import { useAccordionData } from "@/hooks";
import Accordion from "@/components/Accordion";


const FAQ = () => {
  const { accordionItems, isLoading, error } = useAccordionData();
  console.log(accordionItems, isLoading, error);

  return (
    <div className={styles.page}>
      <Header />
      
      <main className={styles.main}>
        <Container>
          <div>
            <Accordion items={accordionItems} />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
