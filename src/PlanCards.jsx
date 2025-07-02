import React from 'react';
import './PlanCards.css';

export default function PlanCards() {
  return (
    <div className="cards">
      <div className="card">
        <img src="https://cdn-icons-png.flaticon.com/512/3159/3159066.png" alt="trophy" />
        <div>
          <h3>Crack It All</h3>
          <p>300 Problems in 3+ months</p>
        </div>
      </div>
      <div className="card">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="interview" />
        <div>
          <h3>Get Interview Ready</h3>
          <p>150 Problems in 1–3 Months</p>
        </div>
      </div>
      <div className="card red">
        <img src="https://cdn-icons-png.flaticon.com/512/3143/3143643.png" alt="timer" />
        <div>
          <h3>Quick Revise</h3>
          <p>75 Problems in &lt;1 Month</p>
        </div>
      </div>
    </div>
  );
}
