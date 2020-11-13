import React from 'react';

interface IProps {
    src: string;
    alt: string;
}

function Image(props: IProps) {
    return (
        <div className="flex">
          <img className="img" src={props.src} alt={props.alt} />
        </div>
    );
}

export default Image;