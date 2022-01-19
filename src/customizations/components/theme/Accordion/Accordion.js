import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

export function AccordionEEA({ content, variant, ...args }) {
  const [activeIndex, setActiveIndex] = useState();

  const toggleOpenAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <Accordion className={`eeaAccordion ${variant}`} {...args}>
      {content.map((item, index) => (
        <div className="eeaAccordionItem" key={index}>
          <Accordion.Title
            active={activeIndex === index}
            index={index}
            onClick={toggleOpenAccordion}
          >
            <Icon name="chevron circle down" />
            {item.title}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index}>
            <p>{item.content}</p>
          </Accordion.Content>
        </div>
      ))}
    </Accordion>
  );
}
