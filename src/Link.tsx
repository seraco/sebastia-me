import React, { Component } from 'react';

interface IProps {
    href: string;
    children?: any;
}

function Link(props: IProps) {
    return (
        <a className="Link" href={props.href} target="_blank">
            {props.children}
        </a>
    );
}

export default Link;