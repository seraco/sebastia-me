import React, { ReactNode } from 'react';

interface IProps {
    href: string;
    children?: ReactNode;
    internal?: boolean;
}

function Link(props: IProps) {
    return (
        <a
            className="Link"
            href={props.href}
            target={props.internal ? undefined : '_blank'}
            rel={props.internal ? undefined : 'noopener noreferrer'}>
            {props.children}
        </a>
    );
}

Link.defaultProps = {
    internal: false,
};

export default Link;