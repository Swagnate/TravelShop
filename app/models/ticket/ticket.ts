
export interface ITicket {
    description: string;
    name: string;
    price: string;
    tourOperator: string;
    vipStatus: string;
    location: {
        x: '30.4044',
        y: '70.45'
    },
    hotel: string

}
export interface IVipTicket extends ITicket {
    vipNumber: number,
    vipStatus: 'string'

}
export type TicketType = ITicket | IVipTicket;






