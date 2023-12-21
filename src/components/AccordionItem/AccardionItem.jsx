import { Icon } from '@iconify/react';
export default function AccordionItem({data, index, isActive, onClick}) {
    return (
        <li className="accordion__item">
            <div className="accordion__item--index">
            {index}
            </div>
            <div className="accordion__wrapper">
                <div className="accordion__item--head">
                    <div className="accordion__item--title">
                        {data.title}
                    </div>
                    <div className={`accordion__item--button ${isActive ? 'active' : ''}`} onClick={onClick}>
                        <Icon icon="ic:outline-plus" width="24" height="24" />
                    </div>
                </div>
                <div className={`accordion__item--body ${isActive ? 'active' : ''} `} >
                    {data.body}
                </div>
            </div>
        </li>
    ) 
}