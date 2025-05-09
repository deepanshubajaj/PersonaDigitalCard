import React from 'react';

export default function Footer() {
    const X = import.meta.env.VITE_X;
    const facebook = import.meta.env.VITE_FACEBOOK;
    const instagram = import.meta.env.VITE_INSTAGRAM;
    const github = import.meta.env.VITE_GITHUB;
    const snapchat = import.meta.env.VITE_SNAPCHAT;

    return (
        <div className='Footer'>
            <a href={`${X}`} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-x-twitter"></i>
            </a>

            <a href={`${facebook}`} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-facebook"></i>
            </a>

            <a href={`${instagram}`} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-instagram"></i>
            </a>

            <a href={`${snapchat}`} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-snapchat"></i>
            </a>

            <a href={`${github}`} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-github"></i>
            </a>

        </div>
    )
}