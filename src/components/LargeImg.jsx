import React from 'react';


const LargeImg = (props) => {
    return (
        <div className="lg-img-hldr">
            <div className="top-bar">
                <div className="close-container" onClick={props.closeButton}>
                  <img className="close-icon" src="/icon/close.svg" alt="" />
                    <span className="close-text">close</span> 
                </div>
            </div>
            <img src={props.src} alt="Large view" />
            <div className="bottom-bar">
                <h3 className="title">{props.title}</h3>
                <div className="descriptions">{props.details}</div>
            </div>
        </div>
    );
};


export default LargeImg;