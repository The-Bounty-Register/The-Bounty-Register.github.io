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
            <p>The advanced allocation algorithm is powered by a knowledge base of resarch-backed workout techniques that take into account a members fitness level, prefered exercises, available machines and more to create the perfect workout for the user!</p>
          </div>
          <div className="box box-2">
            <h1>Automated Booking System</h1>
            <p>Once the advanced allocation algorithm has done its job, the automated booking system will book the appropriate machines at the gym for the specified time!</p>
            </div>
          <div className="box box-3">
            <h1>Iterative Feedback Loop</h1>
            <p>There is a profile for every user with their prefered machines workout styles, this information is used to power the AAA!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AAA;
