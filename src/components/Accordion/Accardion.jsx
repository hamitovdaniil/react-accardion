import { useState } from 'react';
import './Accardion.scss';
import {data} from './data';
import AccordionItem from '../AccordionItem/AccardionItem';

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };
    
    return (
        <ul className="accordion">
            {data.map((item, index) => (
                <AccordionItem 
                    key={index}  
                    index={(index + 1).toString().padStart(2, '0')} 
                    data={item} 
                    isActive={activeIndex === index} 
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </ul>
    );
}

