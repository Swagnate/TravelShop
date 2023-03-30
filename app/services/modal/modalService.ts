
import { Modal } from "../../classess/modal";
import { toursDataArray } from "../../index";
import { ITours } from "../../models/tours/tours"; // ссылка на массив с данными

export function openModal(type: string, i: number) {

    const data = toursDataArray[i];
    const tourId = data[i]?.id;

    let modalInfo: ITours = <ITours>{};
    switch (type) {
        case "order":
            const modalTemplate = `
      <div> 
      <p data-modal-id="tour-modal" class="close-modal">x</p>
      <p>${data.name}</p>
       <p>${data.description}</p>
       
       <div data-tour-id=${tourId} class="ticket-submit">
       <a href="ticket.html">Купить билет</a>
</div>
     </div>
  `
            const modal = new Modal('tour-modal');
            modal.open(modalTemplate);
            break;
    }
}


