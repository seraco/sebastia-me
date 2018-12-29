import React, { Component } from 'react';

import Text from './Text';
import Image from './Image';

export interface ISection {
    order: number;
    title: string;
    text: string;
    src: string;
    alt: string;
}

function Section(props: ISection) {
    return (
        <div className={"Section " + (props.order ? 'direct' : 'reverse')}>
            <Text title={props.title} text={props.text}></Text>
            <Image src={props.src} alt={props.alt}></Image>
        </div>
    );
}

export default Section;