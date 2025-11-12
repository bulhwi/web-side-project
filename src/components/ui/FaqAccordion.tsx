'use client';

import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { designTokens } from '@/theme/designTokens';
import faqData from '@/data/faq.json';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FaqAccordion: React.FC = () => {
  const [openItem, setOpenItem] = useState<string>('');

  const handleValueChange = (value: string) => {
    setOpenItem(value);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Accordion.Root
        type="single"
        value={openItem}
        onValueChange={handleValueChange}
        collapsible
        className="w-full"
      >
        {(faqData as FaqItem[]).map((item) => (
          <Accordion.Item
            key={item.id}
            value={item.id}
            className="border-b border-gray-200 last:border-b-0"
          >
            <Accordion.Header className="flex">
              <Accordion.Trigger
                className="group flex flex-1 items-center justify-between py-4 px-6 text-left font-medium transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 data-[state=open]:bg-gray-50"
                style={{
                  color: designTokens.colors.grayscale.gray700,
                  fontSize: designTokens.typography.fontSizes.lg,
                  fontFamily: designTokens.typography.fontFamilies.body,
                  fontWeight: designTokens.typography.fontWeights.medium,
                }}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  style={{ color: designTokens.colors.primary.primary500 }}
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content
              className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            >
              <div
                className="pb-4 pt-0 px-6"
                style={{
                  color: designTokens.colors.grayscale.gray500,
                  fontSize: designTokens.typography.fontSizes.base,
                  fontFamily: designTokens.typography.fontFamilies.body,
                  lineHeight: '1.6',
                }}
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};