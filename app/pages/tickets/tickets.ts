import { getTicketById, postTicketData } from "@rest/tickets";
import '@myCss';
import '@assets/styles/tickets.scss'
import { initTicketElementTemplate } from "../../templates/ticketInfo";
import { IVipTicket, TicketType, ITicket } from "../../models/ticket/ticket";
import { initFooterTitle, initHeaderTitle } from "@services/general/general";
import { IUser } from "../../models/user/user";

let ticketInstance: IVipTicket;
let ticketPostInstance;
const clientType = "custom";

initApp();
registerConfirmButton();

function initApp(): void {
    const ticketData: Promise<IVipTicket[]> = getTicketById<IVipTicket>('someId');
    ticketData.then((data): void => {
        ticketInstance = data[0];
        const ticketName = typeof ticketInstance?.name === "string" ? ticketInstance?.name : '';
        initHeaderTitle(ticketName, 'h3');
        initFooterTitle('Туры по всему миру', 'h2');
        initTicketInfo(ticketInstance);
    });
}

function initTicketInfo(ticket: TicketType) {
    const targetElement = document.querySelector('.ticket-info');
    const ticketDescription = ticket?.description;
    const ticketOperator = ticket?.tourOperator;
    const vipClientType = ticket.vipStatus;
    const ticketElemsArr: [string, string, string] = [ticketDescription, ticketOperator, vipClientType];
    let ticketElemTemplate;
    ticketElemsArr.forEach((el, i) => {
        ticketElemTemplate += initTicketElementTemplate(el, i);
    });
    targetElement.innerHTML = ticketElemTemplate;

}

function initUserData() {
    const userInfo = document.querySelectorAll('.user-info > p');
    const userInfoObj: any = '';
    userInfo.forEach((el) => {
        const inputDataName = el.getAttribute('data-name');
        if (inputDataName) {
            const inputElems = el.querySelector('input');
            userInfoObj[inputDataName] = inputElems.value;
        }
    });
    console.log('userInfoObj', userInfoObj)
    return userInfoObj;
}

function initPostData(data) {
    initUserData();
    postTicketData(data).then((data) => {
        if (data.success) {

        }
    })
}

function registerConfirmButton(): void {
    const targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', () => {
            initPostData(ticketPostInstance);
        });
    }
}
