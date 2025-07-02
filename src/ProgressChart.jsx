import React from 'react';
import './ProgressChart.css';

export default function ProgressChart() {
  return (
    <div className="progress-card">
      <div className="circle">
        <span>4<br /><small>/75</small><br />Solved</span>
      </div>
      <div className="legend">
        <p className="easy">Easy 4/7</p>
        <p className="medium">Medium 0/53</p>
        <p className="hard">Hard 0/15</p>
      </div>
    </div>
  );
}
