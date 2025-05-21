import { useState } from 'react';
import type { AccordionItem } from '@/types/AccordionItem';
import styles from './Accordion.module.scss';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export const Accordion = ({ items, className = '' }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  if (!items || items.length === 0) {
    return null;
  }

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map(item => {
        const isOpen = openItems[item.id] || false;

        return (
          <details
            key={item.id}
            className={styles.item}
            id={`accordion-item-${item.id}`}
            open={isOpen}
          >
            <summary
              className={styles.summary}
              onClick={e => {
                e.preventDefault();
                toggleItem(item.id);
              }}
            >
              <span className={styles.title}>{item.question}</span>
              <span className={styles.icon}>
                {isOpen ? (
                  <IoIosArrowUp color="#0ba7eb" size={20} />
                ) : (
                  <IoIosArrowDown color="#0d5d9a" size={20} />
                )}
              </span>
            </summary>
            <div className={styles.content}>
              <div className={styles.contentInner}>{item.answer}</div>
            </div>
          </details>
        );
      })}
    </div>
  );
};

export default Accordion;
