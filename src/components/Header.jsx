import React from 'react'

const Header = () => {
    return (
        <div>
            <header style={styles.header}>
                <h1>ReactMeals</h1>
                <button style={styles.cartButton}>Your Cart <span style={styles.cartCount}>3</span></button>
            </header>

        </div>
    )
}


const styles={
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#8a2b06',
        color: 'white',
        padding: '1rem 10%',
      },
      cartButton: {
        backgroundColor: '#5a1a01',
        border: 'none',
        color: 'white',
        padding: '0.75rem 2rem',
        borderRadius: '25px',
        cursor: 'pointer',
      },
      cartCount: {
        marginLeft: '0.5rem',
        backgroundColor: '#b94517',
        padding: '0.25rem 0.75rem',
        borderRadius: '12px',
      }

}


export default Header