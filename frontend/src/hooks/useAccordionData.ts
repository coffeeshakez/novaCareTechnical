import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { ACCORDION_ITEMS_QUERY } from '@/services/queries/accordionQueries';
import { mapAccordionResponseToItems, type AccordionQueryResult } from '@/utils/mappers/mappers';

export const useAccordionData = () => {
  const { data, loading, error } = useQuery<AccordionQueryResult>(ACCORDION_ITEMS_QUERY, {
    fetchPolicy: 'cache-first',
    nextFetchPolicy: 'cache-and-network',
  });
  
  const accordionItems = useMemo(() => {
    if (!data) return [];
    return mapAccordionResponseToItems(data);
  }, [data]);

  const errorMessage = error ? 'Failed to load Q&A data. Please try again later.' : null;

  return { 
    accordionItems, 
    isLoading: loading, 
    error: errorMessage 
  };
};
