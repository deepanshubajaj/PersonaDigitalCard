import React from 'react';
import profilePic from '../images/ProfilePic.png';
import { ExternalLink } from 'react-feather';

export default function Header() {
    const name = import.meta.env.VITE_NAME;
    const title = import.meta.env.VITE_TITLE;
    const subtitle = import.meta.env.VITE_SUBTITLE;
    const website = import.meta.env.VITE_WEBSITE;

    return (
        <div className="Header">
            <img className="profile-pic" src={profilePic} alt="Profile picture" />
            <p className="name">{name}</p>
            <p className="title">👨‍💻 {title}
                <br />{subtitle}
            </p>
            <p className="website">
                <a href={website} target="_blank" rel="noreferrer">
                    Website
                    <ExternalLink size={18}
                        style={{ marginLeft: '4px', verticalAlign: 'middle', fontWeight: 'bold' }}
                    />
                </a>
            </p>
        </div>
    );
}
