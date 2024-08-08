import React from 'react';
import './AAA.css';
import Header from './header';

function AAA() {
  return (
    <div className="aaa">

    <Header />

      <section className="how-it-works">
        <div className="boxes">
          <div className="box box-1">01 intention</div>
          <div className="box box-2">02 interface</div>
          <div className="box box-3">03 interaction</div>
        </div>
      </section>

      <section className="rabbit-hole">
        <h2>the rabbithole</h2>
        <p>
          the rabbithole is an all-in-one web portal to manage your relationship with rabbit OS, and your companion device.
        </p>
        <div className="rabbit-hole-options">
          <div className="option">
            <h3>logging in</h3>
            <p>adjust the core device settings and use on-demand device management for up to 24 hours</p>
          </div>
          <div className="option">
            <h3>settings</h3>
            <p>change your preferences and your device will follow suit, but please note, some changes may have consequences</p>
          </div>
          <div className="option">
            <h3>journal</h3>
            <p>track your daily interactions with an auto-updating journal that helps you reflect, learn, and grow.</p>
          </div>
        </div>
      </section>

      <section className="lam-functionality">
        <h2>LAM functionality</h2>
        <div className="functionality-list">
          <div className="item">
            <h3>optimal</h3>
            <p>the best way to get valuable output</p>
          </div>
          <div className="item">
            <h3>exploratory</h3>
            <p>use rabbit OS to explore ideas and possibilities</p>
          </div>
          <div className="item">
            <h3>planned</h3>
            <p>planned actions and routine activities</p>
          </div>
          <div className="item">
            <h3>experimental</h3>
            <p>new, experimental features</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <h2>privacy</h2>
        <p>a dedicated companion to ensure your privacy</p>
      </section>

      <section className="teach-mode">
        <h2>experimental teach mode</h2>
        <p>
          we envision a truly personalized, accessible rabbit OS. To do so, we are pushing the limits of what LAM technology can achieve. In this mode, anyone can create their own LAM-powered rabbit without any programming experience.
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
