import React from 'react';

interface IProps {
    title?: string;
    children?: any;
    onMouseEnterContent?(): void;
    onMouseLeaveContent?(): void;
}

function Text({ title, children, onMouseEnterContent, onMouseLeaveContent }: IProps) {
    return (
        <div className="Text flex">
            <div
                className="text-content"
                onMouseEnter={onMouseEnterContent}
                onMouseLeave={onMouseLeaveContent}>
                {title && <h1 className="title">{title}</h1>}
                <p className="paragraph">{children}</p>
            </div>
        </div>
    );
}

export default Text;