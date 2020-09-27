import React from 'react';

interface IProps {
    href: string;
    children?: any;
}

function Link(props: IProps) {
    return (
        <a
            className="Link"
            href={props.href}
            target="_blank"
            rel="noopener noreferrer">
            {props.children}
        </a>
    );
}

export default Link;