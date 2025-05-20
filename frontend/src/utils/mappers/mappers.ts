import type { AccordionItem } from '@/types/AccordionItem';

type FaqItemResponse = {
  id: { id: string };
  question?: string;
  answer?: string;
};

type AccordionQueryResult = {
  allFaqItems: {
    items: {
      accordionItemsCollection: {
        items: FaqItemResponse[];
      };
    }[];
  };
};

export const mapAccordionResponseToItems = (data: AccordionQueryResult): AccordionItem[] => {
  if (!data?.allFaqItems?.items?.length) {
    return [];
  }

  const result: AccordionItem[] = [];
  
  for (const group of data.allFaqItems.items) {
    const items = group.accordionItemsCollection?.items || [];
    
    for (const item of items) {
      if (!item?.id?.id || !item.question || !item.answer) {
        continue;
      }
      
      result.push({
        id: item.id.id,
        question: item.question,
        answer: item.answer
      });
    }
  }
  
  return result;
}

export type { AccordionQueryResult, FaqItemResponse };