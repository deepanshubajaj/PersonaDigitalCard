import React from 'react';

export default function Contact() {
  const email = import.meta.env.VITE_EMAIL;
  const linkedIn = import.meta.env.VITE_LINKEDIN;

  return (
    <div className="--info-buttons">
      <button className="--info-email">
        <a href={`mailto:${email}`}>
          <i className="fa-solid fa-envelope"></i> Email
        </a>
      </button>
      <button className="--info-linkedin">
        <a
          href={`${linkedIn}`}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
      </button>
    </div>
  )
}