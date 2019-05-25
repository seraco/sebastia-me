import React, { Component } from 'react';

import Text from './Text';
import Image from './Image';

export interface ISection {
    order: number;
    title?: string;
    src: string;
    alt: string;
    children?: any;
}

function Section(props: ISection) {
    return (
        <div className={"Section " + (props.order ? 'direct' : 'reverse')}>
            <Text title={props.title}>{props.children}</Text>
            <Image src={props.src} alt={props.alt}></Image>
        </div>
    );
}

export default Section;