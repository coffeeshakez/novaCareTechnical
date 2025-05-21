import { Container, PageContainer } from "@/components/Layout";
import styles from "./FAQ.module.scss";
import { useAccordionData } from "@/hooks";
import Accordion from "@/components/Accordion";


const FAQ = () => {
  const { accordionItems, isLoading, error } = useAccordionData();
  console.log(accordionItems, isLoading, error);

  return (
    <PageContainer>
      <Container>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <div className={styles.accordionWrapper}>
          <Accordion items={accordionItems} />
        </div>
      </Container>
    </PageContainer>
  );
};

export default FAQ;
