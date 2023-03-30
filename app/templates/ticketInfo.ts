import { ITours } from "../models/tours/tours";

export function initTicketElementTemplate(data, i): string {
    const tmpl = `
       <div  data-item-index=${i} class="ticket-block">
           <p>${data}</p>
       </div>
    `
    return tmpl;
}