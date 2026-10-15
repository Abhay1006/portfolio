import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import BookIcon from "@mui/icons-material/Book";
import { QUOTES } from "../helpers/QuotesList";
import "../styles/Footer.css";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-label="X">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function Footer() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setQuote(QUOTES[randomIndex]);
  }, []);

  return (
    <div className='footer'>
      {quote && (
        <div className='quoteContainer'>
          <p className='quoteText'>“{quote}”</p>
        </div>
      )}
      <div className='socialMedia'>
        <Link to="https://www.instagram.com/pratap_abhay.10/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </Link>
        <Link to="https://x.com/AbhayPrSi" target="_blank" rel="noopener noreferrer">
          <XIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/abhay-pratap-singh1006/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </Link>
        <a href="https://blog.oniichad.com" target="_blank" rel="noopener noreferrer">
          <BookIcon />
        </a>
        <Link to="mailto:abhaypratapsingh1006@gmail.com">
          <EmailIcon />
        </Link>
      </div>
      <p>&copy; 2023 abhayportfolio.com</p>
    </div>
  );
}

export default Footer;
