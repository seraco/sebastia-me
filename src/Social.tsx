import React from 'react';

function Social() {
    return (
        <div className="Social">
            <a 
                href="https://github.com/seraco"
                target="_blank"
                rel="noopener noreferrer">
                <img
                    className="logo"
                    src="GitHub-Mark-Light-64px.png"
                    alt="github-logo"/>
            </a>
            <a 
                href="https://www.linkedin.com/in/sebastiaramoncolom"
                target="_blank"
                rel="noopener noreferrer">
                <img
                    className="logo"
                    src="In-2C-66px-R.png"
                    alt="linkedin-logo"/>
            </a>
        </div>
    );
}

export default Social;