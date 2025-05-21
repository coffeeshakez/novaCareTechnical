import { Container, PageContainer } from '@/components/Layout';
import styles from './FAQ.module.scss';
import { useAccordionData } from '@/hooks';
import Accordion from '@/components/Accordion';
import LoadingIndicator from '@/components/LoadingIndicator';
import ErrorMessage from '@/components/ErrorMessage';

const FAQ = () => {
  const { accordionItems, isLoading, error } = useAccordionData();

  const renderContent = () => {
    if (isLoading) {
      return <LoadingIndicator message="Loading questions..." />;
    }
    
    if (error) {
      return <ErrorMessage message={error} onRetry={() => window.location.reload()} />;
    }
    
    if (accordionItems.length === 0) {
      return <p className={styles.noItems}>No questions found. Please check back later.</p>;
    }
    
    return <Accordion items={accordionItems} />;
  };

  return (
    <PageContainer>
      <Container>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <div className={styles.accordionWrapper}>
          {renderContent()}
        </div>
      </Container>
    </PageContainer>
  );
};

export default FAQ;
