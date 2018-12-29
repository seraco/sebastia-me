import React, { Component } from 'react';

interface IProps {
    text: string;
}

function Text(props: IProps) {
    return (
        <div className="Text flex">
            <p>{props.text}</p>
        </div>
    );
}

export default Text;