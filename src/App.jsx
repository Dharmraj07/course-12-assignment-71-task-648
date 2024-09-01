import React from 'react';
import Header from './components/Header';
import SummarySection from './components/SummarySection';
import MealList from './components/MealList';

const App = () => {
  const meals = [
    { id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 22.99 },
    { id: 'm2', name: 'Schnitzel', description: 'A German specialty!', price: 16.5 },
    { id: 'm3', name: 'Barbecue Burger', description: 'American, raw, meaty', price: 12.99 },
    { id: 'm4', name: 'Green Bowl', description: 'Healthy...and green...', price: 18.99 },
  ];

  return (
    <div>
      <Header/>
      <SummarySection/>
      <MealList meals={meals} />

    </div>
  );
};



export default App;
