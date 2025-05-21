import styles from './LoadingIndicator.module.scss';
import { FiLoader } from 'react-icons/fi';

interface LoadingIndicatorProps {
  message?: string;
}

export const LoadingIndicator = ({ message = 'Loading...' }: LoadingIndicatorProps) => {
  return (
    <div className={styles.container}>
      <FiLoader className={styles.spinner} />
      {message && <span className={styles.text}>{message}</span>}
    </div>
  );
};

export default LoadingIndicator;
