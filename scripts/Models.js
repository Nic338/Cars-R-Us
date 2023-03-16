import { getModels, setModels } from "./database.js";

const models = getModels()

document.addEventListener("change",(event) => {
    if (event.target.id === "models") {
        setModels(parseInt(event.target.value))
    }
    }
)

export const Models = () => {
    
    let html = ""

    html += '<select id="models">'
    html += '<option value="0">Select a Model</option>'

    const arrayOfOptions = models.map( (model) =>{
        return `<option value="${model.id}">${model.name}</option>`
    }
)

html += arrayOfOptions.join("")
html += "</select>"
return html

} 