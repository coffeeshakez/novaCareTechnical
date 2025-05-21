
import { LinkButton } from '@/components/UI';
import styles from './Hero.module.scss';

interface HeroProps {
  title: string;
  text: string;
  linkText?: string;
  linkUrl?: string;
}

export const Hero = ({ title, text, linkText, linkUrl }: HeroProps) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>{title}</h1>
        </div>
        <div className={styles.heroRight}>
          <p className={styles.heroText}>{text}</p>
          {linkText && linkUrl && (
            <div className={styles.heroActions}>
              <LinkButton to={linkUrl} variant="outline">{linkText}</LinkButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
