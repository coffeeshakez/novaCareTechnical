import { useState, useEffect } from 'react';
import { getAccordionData } from '@/services/queries/accordionQueries';
import type { AccordionItem } from '@/types/AccordionItem';

export const useAccordionData = () => {
  const [accordionItems, setAccordionItems] = useState<AccordionItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccordionData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getAccordionData();
        setAccordionItems(data);
      } catch (err) {
        setError('Failed to load Q&A data. Please try again later.');
        console.error('Error in useAccordionData hook:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccordionData();
  }, []);

  return { accordionItems, isLoading, error };
};
