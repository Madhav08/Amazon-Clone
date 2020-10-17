import React from "react";
import "./Subtotal.css";
import CurrecyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import {getBasketTotal} from "../reducer"

function Subtotal() {

  const [{basket}, dispatch]=useStateValue();

  console.log(getBasketTotal(basket))
  return (
    <div className="subtotal">
      <CurrecyFormat
        renderText={(value) => (
          <>
            <p>
        Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This Order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
