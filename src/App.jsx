import React from 'react';
import './App.css';
import HeaderSection from './HeaderSection';
import PlanCards from './PlanCards';
import ProgressChart from './ProgressChart';
import SearchFilter from './SearchFilter';

export default function App() {
  return (
    <div className="dashboard">
      <HeaderSection />
      <PlanCards />
      <div className="content-row">
        <ProgressChart />
        <SearchFilter />
      </div>
    </div>
  );
}
