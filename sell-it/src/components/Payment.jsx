import React from 'react'
import '../components/Payment.css';
import { useStateValue } from '../StateProvider';

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <div className="payment__section">
                      <div className="payment__title">
                          <h3>Delivery Address</h3>
                      </div>
                      <div className="payment__address">
                          <p>{user?.email}</p>
                          <p>6, Ogunyemi Street</p>
                          <p>Pedro road, Lagos, NG</p>
                      </div>
                </div>

                <div className="payment__section">
                    
                </div>

                <div className="payment__section">
                    
                </div>
            </div>
        </div>
    )
}

export default Payment
