import { getTech, setTech } from "./database.js";

const techs = getTech()

document.addEventListener("change", (event) => {
    if (event.target.id === "tech") {       
        setTech(parseInt(event.target.value))
    }
})

export const Tech = () => {
      
    let html = "<h2>Technologies</h2>"
    
        html += '<select id="tech">'
        html += '<option value="0">Select a Technology Package</option>'
    
        const arrayOfOptions = techs.map( (tech) => {
                return `<option value="${tech.id}">${tech.package}</option>`
            }
        )
    
        html += arrayOfOptions.join("")
        html += "</select>"
        return html
    }
