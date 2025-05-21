import { gql } from '@apollo/client';

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
