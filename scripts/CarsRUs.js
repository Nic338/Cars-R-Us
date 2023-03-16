import { Interiors } from "./Interiors.js";
import { Tech } from "./Technologies.js";
import { Paints } from "./Paints.js";
import { Wheels } from "./Wheels.js";
import { Orders } from "./Orders.js";
import { addCustomOrder } from "./database.js";
import { Models } from "./Models.js"

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
<section class="choices__models model">
<h2>Model Options</h2>
  ${Models()}
  </section>
<button id="orderButton">Create Custom Order</button>
</article>

<article class="customOrders">
            <h2>Custom Car Order</h2>
            ${Orders()}
        </article>


`
}