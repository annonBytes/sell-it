import React from 'react'
import "../components/Subtotal.css"
import CurrencyFormat from "react-currency-format"

export default function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat 
              renderText={
                  (value) => (
                      <>
                         <p>
                             {/* Subtotal({basket.length} items): */}
                             {/* <strong>{` ${value}`}</strong> */}
                            Subtotal(0 items): 
                            <strong>0</strong> 
                         </p>

                         <small className="subtotal__gift">
                            <input type="checkbox"/>
                            This order contains a gift
                         </small>
                      </>
                  )}

                  decimalScale={2}
                  value={0}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"£"}
            />
        </div>
    )
}
