import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Faq } from '../../interfaces/Faq';

interface FaqAccordionProps {
    faqData: Faq[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqData }) => {
    return (
        <div className="faq-accordion">
            <Accordion>
                {
                    faqData && faqData.map((faq, index)=> (
                        // <div key={index}  data-testid={`accordion-item-${index}`}> Item</div>
                      <Accordion.Item eventKey={`${index}`} key={index}  data-testid={`accordion-item-${index}`}>
                        <Accordion.Header>{faq.title}</Accordion.Header>
                        <Accordion.Body>{faq.body}</Accordion.Body>
                      </Accordion.Item>
                    ))
                }
            </Accordion>
        </div>

    )
}


export default FaqAccordion;