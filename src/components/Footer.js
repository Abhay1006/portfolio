import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import BookIcon from "@mui/icons-material/Book";
import { QUOTES } from "../helpers/QuotesList";
import "../styles/Footer.css";

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
          <TwitterIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/abhay-pratap-singh1006/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </Link>
        <a href="https://blogs.oniichad.com" target="_blank" rel="noopener noreferrer">
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
