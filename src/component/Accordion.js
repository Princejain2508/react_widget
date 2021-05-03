import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClick = (index) => {
        setActiveIndex(index);
    }
    const renderedItems = items.map(
        (Element, index) => {
            const active = index === activeIndex ? "active" : "";
            return (
                <React.Fragment key={Element.title} >
                    <div className={`title ${active}`} onClick={() => onTitleClick(index)}><i className="dropdown icon"></i>{Element.title}</div>
                    <div className={`content ${active}`}>{Element.content}</div>
                </React.Fragment>
            );
        }
    );

    return <div className=" ui styled accordion"> {renderedItems} </div>;
}

export default Accordion;