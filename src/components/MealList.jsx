import React from 'react'

const MealList = ({meals}) => {
    console.log(meals);
  return (
    <div>
        <ul style={styles.mealList}>
        {meals.map((meal) => (
          <li key={meal.id} style={styles.mealItem}>
            <div>
              <h2>{meal.name}</h2>
              <p>{meal.description}</p>
              <span style={styles.price}>${meal.price.toFixed(2)}</span>
            </div>
          </li>
        ))}
      </ul>
        
    </div>
  )
}

const styles={
    mealList: {
        listStyle: 'none',
        margin: '2rem auto',
        padding: '0',
        width: '90%',
        maxWidth: '40rem',
      },
      mealItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: '1rem 0',
        padding: '1rem',
        borderRadius: '6px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
      },
      price: {
        color: '#8a2b06',
        fontWeight: 'bold',
      },
}

export default MealList