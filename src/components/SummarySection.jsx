import React from 'react';

const SummarySection = () => {
    return (
        <section style={styles.summary}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
                All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
            </p>
        </section>
    )
}

const styles = {
    summary: {
        textAlign: 'center',
        backgroundColor: '#383838',
        color: 'white',
        padding: '1rem',
        borderRadius: '6px',
        width: '90%',
        maxWidth: '40rem',
        margin: '2rem auto',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
    }

}

export default SummarySection