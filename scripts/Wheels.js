import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener("change", (event) => {
    if (event.target.id === "wheels") {
        setWheels(parseInt(event.target.value))
    }
})

export const Wheels = () => {
    
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select a Wheel Option</option>'

    const arrayOfOptions = wheels.map( (wheel) =>{
        return `<option value="${wheel.id}">${wheel.style}</option>`
    }
)

html += arrayOfOptions.join("")
html += "</select>"
return html

} 