import React, { Component } from 'react';

interface IProps {
    title: string;
    text: string;
}

function Text(props: IProps) {
    return (
        <div className="Text flex">
            <div className="text-content">
                <h1>{props.title}</h1>
                <p className="paragraph">{props.text}</p>
            </div>
        </div>
    );
}

export default Text;