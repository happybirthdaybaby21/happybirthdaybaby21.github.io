import React, { useState } from 'react';
import script from './script';

import { PageLayout } from 'pages';

import './AboutPage.scss';

const AboutPage = () => {
  let [count, setCount] = useState(0);

  const nextSlide = (script) => {
    const speechTextElement = document.getElementById('speech-txt');
    speechTextElement.classList.remove('animate-in');

    count < script.length - 1 ? setCount(count + 1) : null;

    void speechTextElement.offsetWidth;

    speechTextElement.classList.add('animate-in');
  };

  return (
    <PageLayout>
      <div className="intro-section">
        <div className="image-container">
          <img src={script[count].image} alt="dr umar" />
        </div>
        <div id="speech-bubble">
          <div id="bub-part-a"></div>
          <div id="bub-part-b"></div>
          <div id="bub-part-c"></div>
          <div id="speech-txt" className="typewriter animate-in">
            <p>{script[count].text}</p>
          </div>
          <div id="bub-part-c"></div>
          <div id="bub-part-b"></div>
          <div id="bub-part-a"></div>

          <div id="speech-arrow">
            <div id="arrow-w"></div>
            <div id="arrow-x"></div>
            <div id="arrow-y"></div>
            <div id="arrow-z"></div>
          </div>
        </div>
        <button className="next-button" onClick={() => nextSlide(script)}>
          <span>{'next >'}</span>
        </button>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
