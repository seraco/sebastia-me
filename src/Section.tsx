import React, { Component } from 'react';

import Text from './Text';
import Image from './Image';

export interface ISection {
    order: number;
    text: string;
    src: string;
    alt: string;
}

function Section(props: ISection) {
    return (
        <div className={"Section " + (props.order ? 'row' : 'row-reverse')}>
            <Text text={props.text}></Text>
            <Image src={props.src} alt={props.alt}></Image>
        </div>
    );
}

export default Section;