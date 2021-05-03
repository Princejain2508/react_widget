import React from 'react';



const Link = ({ path, name }) => {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', path);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        console.log(window);
    }
    return <a className="item" href={path} onClick={onClick}>{name}</a>
}

export default Link;