import React, { useState, useEffect } from 'react';
import capitalizeFirstLetter from '../../../functions/capinalizeFirstLetter';
import { CustomerGreetingStyled } from './CustomerGreetingStyled';

function CustomerGreeting() {
  const [userData, setuserData] = useState([]);
  const [storedCart, setstoredCart] = useState([]);
  const totalQuantity = storedCart.reduce((sum, el) => sum + el.quantity, 0);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setuserData(userData);
    }

    const cartItems = JSON.parse(localStorage.getItem('cart'));
    if (cartItems) {
      setstoredCart(cartItems);
    }
  }, []);
  return (
    <>
      {userData.last_name && (
        <CustomerGreetingStyled>
          <div className='greetingContainer'>
            <div className='customerName'>
              <span>Bine ai revenit</span>
              <h2>{capitalizeFirstLetter(userData.last_name)}</h2>
            </div>
            {totalQuantity !== 0 ? (
              <div className='customerCart'>
                <h2>NU UITA</h2> ca ai
                <h2>{totalQuantity}</h2>
                {totalQuantity === 1 ? 'produs' : 'produse'} in cos
              </div>
            ) : (
              ''
            )}
          </div>
        </CustomerGreetingStyled>
      )}
    </>
  );
}

export default CustomerGreeting;
