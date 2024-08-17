import React from 'react';
import './AAA.css';
import Header from './header';

function AAA() {
  return (
    <div className="aaa">

    <Header />

      <section className="how-it-works">
        <div className="boxes">
          <div className="box box-1">
            <h1>Data Driven Workout Creation</h1>
          </div>
          <div className="box box-2">
            <h1>Automated Booking System</h1>
            </div>
          <div className="box box-3">
            <h1>Iterative Feedback Loop</h1>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <h2>GDPR</h2>
        <p>How we are meeting General Data Protection Regulations</p>
      </section>

      <section className="teach-mode">
        <h2>The Advanced Allocation Algorithm</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        </p>
        <video controls>
          <source src="path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
}

export default AAA;
