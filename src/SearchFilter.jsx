import React from 'react';
import './SearchFilter.css';

export default function SearchFilter() {
  return (
    <div className="search-filter">
      <input type="text" placeholder="Search Problem" />
      <div className="filters">
        <div>
          <label>Difficulty</label>
          <select>
            <option>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
        <div>
          <label>All Topics</label>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>
    </div>
  );
}
