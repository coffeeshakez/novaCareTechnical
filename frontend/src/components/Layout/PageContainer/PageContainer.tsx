import type { ReactNode } from 'react';
import { Header, Footer } from '@/components/Layout';
import styles from './PageContainer.module.scss';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className = '' }: PageContainerProps) => {
  return (
    <div className={`${styles.pageContainer} ${className}`}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageContainer;
