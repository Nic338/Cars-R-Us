const database = {
    paints: [
        {id: 1, price: 1000, style:"Silver"},
        {id: 2, price: 1150, style:"Midnight Blue"},
        {id: 3, price: 1250, style:"Firebrick Red"},
        {id: 4, price: 1235, style:"Spring Green"}
    ],
    interiors: [
        {id: 1, price: 2500, fabric:"Beige Fabric"},
        {id: 2, price: 2650, fabric:"Charcoal Fabric"},
        {id: 3, price: 3250, fabric:"White Leather"},
        {id: 4, price: 3300, fabric:"Black Leather"}
    ],
    technologies: [
        {id: 1, price: 3500, package:"Basic Package"},
        {id: 2, price: 3750, package:"Navigation Package"},
        {id: 3, price: 3700, package:"Visibility Package"},
        {id: 4, price: 4000, package:"Ultra Package"}
    ],
    wheels: [
        {id: 1, price: 1000, style:"17-inch Pair Radial"},
        {id: 2, price: 1150, style:"17-inch Pair Radial Black"},
        {id: 3, price: 1300, style:"18-inch Spoke Silver"},
        {id: 4, price: 1400, style:"18-inch Pair Black"},
    ],
    models: [
        {id: 1, name: "Car", price: 1},
        {id: 2, name: "SUV", price: 1.5},
        {id: 3, name: "Truck", price: 2.25}
    ],
    orderBuilder: {},

    
    customOrders: [
        // {id: 1, paintId: 3, interiorId: 2, techId: 1, wheelId: 1, modelId:3, timestamp:1614538976455}
    ]

}


export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTech = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}
export const getModels = () => {
    return database.models.map(model => ({...model}))
}
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setTech = (id) => {
    database.orderBuilder.techId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}
export const setModels = (id) => {
    database.orderBuilder.modelId = id
}
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders.length === 0 ? 1 : database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}