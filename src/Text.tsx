import React from 'react';

interface IProps {
    title?: string;
    children?: any;
}

function Text(props: IProps) {
    return (
        <div className="Text flex">
            <div className="text-content">
                {props.title && <h1 className="title">{props.title}</h1>}
                <p className="paragraph">{props.children}</p>
            </div>
        </div>
    );
}

export default Text;