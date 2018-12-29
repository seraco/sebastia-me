import React, { Component } from 'react';

interface IProps {
    text: string;
}

function Text(props: IProps) {
    return (
        <div className="Text flex">
            {props.text}
        </div>
    );
}

export default Text;