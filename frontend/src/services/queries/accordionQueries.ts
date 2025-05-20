import { gql } from '@apollo/client';
import type { AccordionItem } from '@/types/AccordionItem';
import { executeGraphQLQuery } from '../graphqlClient';
import { mapAccordionResponseToItems, type AccordionQueryResult } from '@/utils/mappers/mappers';   

export const ACCORDION_ITEMS_QUERY = gql`
  query GetFaqItems {
    allFaqItems: accordionCollection {
      items {
        accordionItemsCollection {
          items {
            id: sys {
              id
            }
            ... on AccordionItem {
              question: name
              answer: text
            }
          }
        }
      }
    }
  }
`;

export async function getAccordionData(): Promise<AccordionItem[]> {
  try {
    const data = await executeGraphQLQuery<AccordionQueryResult>(ACCORDION_ITEMS_QUERY);

    return mapAccordionResponseToItems(data);
  } catch (error) {
    console.error('Error fetching accordion data:', error);
    return [];
  }
}