import { Interiors } from "./Interiors.js";
import { Tech } from "./Technologies.js";
import { Paints } from "./Paints.js";
import { Wheels } from "./Wheels.js";
import { Orders } from "./Orders.js";
import { addCustomOrder } from "./database.js";

document.addEventListener("click",(event) => { 
    if (event.target.id === "orderButton"){
        addCustomOrder()
    }
    }
)

export const CarsRUs = () => {
    return `
<h1>Cars-R-Us!</h1>
<article class="choices">
  <section class="choices__paints options">
  ${Paints()}
</section>
<section class="choices__interiors options">
  ${Interiors()}
</section>
<section class="choices__technologies options">
  ${Tech()}
</section>
<section class="choices__wheels options">
  ${Wheels()}
  </section>
</article>

<article>
<button id="orderButton">Create Custom Order</button>
</article>

<article class="customOrders">
            <h2>Custom Car Order</h2>
            ${Orders()}
        </article>


`
}