import { getOrders, getInteriors, getPaints, getTech, getWheels, getModels } from "./database.js";
const interiors = getInteriors()
const paints = getPaints()
const technologies = getTech()
const wheels = getWheels()
const models = getModels()


const buildOrderListItem = (order) => {
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    
    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.techId
        }
    )

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const foundModel = models.find(
        (model) => {
            return model.id === order.modelId
        }
    )
     
    let totalCost = 0
      if(foundInterior && foundPaint && foundTech && foundModel && foundWheel) {  
        totalCost = (foundInterior.price + foundPaint.price + foundTech.price + foundWheel.price)*foundModel.price
      }
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
    }


export const Orders = () => {

   const orders = getOrders()
   
   let html = "<ul>"
   
   const listItems = orders.map(buildOrderListItem)


    html += listItems.join("")
    html += "</ul>"
   
    return html
}