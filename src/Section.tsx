import React from 'react';

import Text from './Text';
import Image from './Image';

interface ISection {
    order: number;
    title?: string;
    src: string;
    alt: string;
    children?: any;
    onMouseEnterContent?(): void;
    onMouseLeaveContent?(): void;
}

function Section({
    order,
    title,
    src,
    alt,
    children,
    onMouseEnterContent,
    onMouseLeaveContent,
}: ISection) {
    return (
        <div className={"Section " + (order ? 'direct' : 'reverse')}>
            <Text
                title={title}
                onMouseEnterContent={onMouseEnterContent}
                onMouseLeaveContent={onMouseLeaveContent}>
                {children}
            </Text>
            <Image src={src} alt={alt} />
        </div>
    );
}

export default Section;