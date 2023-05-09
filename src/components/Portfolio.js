import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-card">
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/portfolio2/portfolio/src/components/assets/image7.jpg")} alt="Project 2" />
        <div className="portfolio-description">
          <a href="https://github.com/jacko2611/modulate">Modulate</a>
        </div>
      </div>
      <div className="portfolio-card">
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/portfolio2/portfolio/src/components/assets/image2.jpg")} alt="Project 1" />
        <div className="portfolio-description">
          <a href="https://github.com/jacko2611/chat-support">Chat Support</a>
        </div>
      </div>
      <div className="portfolio-card">
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/portfolio2/portfolio/src/components/assets/image2.jpg")} alt="Project 2" />
        <div className="portfolio-description">
          <a href="https://github.com/jacko2611/just-another-editor">JATE</a>
        </div>
      </div>
      <div className="portfolio-card">
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/portfolio2/portfolio/src/components/assets/image3.jpg")} alt="Project 3" />
        <div className="portfolio-description">
          <a href="https://github.com/jacko2611/staff-tracker">Staff Tracker</a>
        </div>
      </div>
      <div className="portfolio-card">
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/portfolio2/portfolio/src/components/assets/image4.jpg")} alt="Project 4" />
        <div className="portfolio-description">
          <a href="https://github.com/jacko2611/social-backend">Social Backend</a>
        </div>
      </div>
      <div className="portfolio-card">
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/portfolio2/portfolio/src/components/assets/image5.jpg")} alt="Project 5" />
        <div className="portfolio-description">
          <a href="https://github.com/jacko2611/shopfront-to-backend">Shopfront - Backend</a>
        </div>
      </div>
      <div className="portfolio-card">
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/portfolio2/portfolio/src/components/assets/image6.jpg")} alt="Project 6" />
        <div className="portfolio-description">
          <a href="https://github.com/jacko2611/are-you-reading.me">Are You Reading.me</a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
