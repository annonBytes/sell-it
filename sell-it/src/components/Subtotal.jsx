import React from 'react'
import "../components/Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer';

export default function Subtotal({price}) {

const [{ basket }] = useStateValue();


    return (
        <div className="subtotal">
            <CurrencyFormat 
              renderText={
                  (value) => (
                      <>
                         <p>
                            Subtotal({ basket?.length } item(s)): 
                            <strong>{` ${value}`}</strong> 
                         </p>

                         <small className="subtotal__gift">
                            <input type="checkbox"/>
                            This order contains a gift
                         </small>
                      </>
                  )}

                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}
