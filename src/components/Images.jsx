import React, { Component } from 'react';
import './Images.css';
import Img from './Img';
import LargeImg from './LargeImg';



class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgLst: [
                {
                    imgSrc: '/img/images/1.jpg',
                    title: 'Grim reaper',
                    details: "All of us are dead"
                },
                {
                    imgSrc: '/img/images/2.jpg',
                    title: 'Joker',
                    details: "Desire becomes surrender, surrender becomes power"
                },
                {
                    imgSrc: '/img/images/3.jpg',
                    title: 'Morbius',
                    details: "Mutineer"
                },
                {
                    imgSrc: '/img/images/4.jpg',
                    title: 'Esme',
                    details: "If nothing at all, come out fighting"
                },
                {
                    imgSrc: '/img/images/5.jpg',
                    title: 'Reflection',
                    details: "This thing called life"
                },
                {
                    imgSrc: '/img/images/6.jpg',
                    title: 'Africa',
                    details: "Our motherland"
                },
                {
                    imgSrc: '/img/images/7.jpg',
                    title: 'Frankestein',
                    details: "Knowledge is Power"
                },
                {
                    imgSrc: '/img/images/8.jpg',
                    title: 'Nature',
                    details: "Matriach of my land"
                },
                {
                    imgSrc: '/img/images/9.jpg',
                    title: 'Rythmn City',
                    details: "One people different colors"
                },
                {
                    imgSrc: '/img/images/10.jpg',
                    title: 'SOTTO VOCE',
                    details: "Siempre"
                },
                {
                    imgSrc: '/img/images/11.jpg',
                    title: 'Alec',
                    details: "80 days around the earth"
                },
                {
                    imgSrc: '/img/images/12.jpg',
                    title: 'Erik',
                    details: "Madagascar"
                },
                {
                    imgSrc: '/img/images/13.jpg',
                    title: 'Nemo',
                    details: "Tommorrow People"
                },
                {
                    imgSrc: '/img/images/14.jpg',
                    title: 'Prisoner',
                    details: "Ying and Yang"
                },
                {
                    imgSrc: '/img/images/15.jpg',
                    title: 'Nun',
                    details: "Deliver us from evil"
                }
            ],
            imgStyle: {
                lrgImgConStyle: {
                    display: 'none'
                },
                imgListConStyle: {
                    display: 'flex'
                }
            },
            lrgImg: {
                imgSrc: '',
                title: '',
                details: ''
            }
        }
    }

    handleClick = (e) => {
    e.preventDefault();
    const clickedSrc = e.target.src;

    const selectedImage = this.state.imgLst.find((img) => {
        const fullPath = new URL(img.imgSrc, window.location.origin).href;
        return fullPath === clickedSrc;
    });

    if (selectedImage) {
        this.setState({
            imgStyle: {
                lrgImgConStyle: { display: 'block' },
                imgListConStyle: { display: 'none' },
            },
            lrgImg: {
                imgSrc: clickedSrc,
                title: selectedImage.title,
                details: selectedImage.details,
            },
        });
    }
};


    closeLargeImage = (e)=>{
        e.preventDefault();
        console.log("close button is working fine");
        this.setState({
            imgStyle: {
                lrgImgConStyle: {
                    display: 'none'
                },
                imgListConStyle: {
                    display: 'flex'
                }
            },
        });
    }

    buttonStyle = {
        background: 'none',
        border: 'none'
    }



    render() {
        let imageItemList = this.state.imgLst.map(image => {
            return (
                <button onClick={this.handleClick} style={this.buttonStyle} key={image.imgSrc} ><Img src={image.imgSrc}></Img></button>
            );
        })



        return (
            <React.Fragment >
                <div className="lg-img-con" style={this.state.imgStyle.lrgImgConStyle}>
                    <LargeImg closeButton={this.closeLargeImage} title={this.state.lrgImg.title} details={this.state.lrgImg.details} src={this.state.lrgImg.imgSrc}></LargeImg>
                    {/* <LargeImage title={this.state.lrgImg.title} details={this.state.lrgImg.details} src={this.state.lrgImg.imgSrc}  > <LargeImage/> */}
                </div>
                <div className="wrapper" style={this.state.imgStyle.imgListConStyle}>
                    {imageItemList}
                </div>
            </React.Fragment>
        );
    }
}


export default Images;