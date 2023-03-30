
import { ITours } from "../../models/tours/tours";

export function getTours(): Promise<ITours[]> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/').then((response) => response.json())
        .then((data: ITours[]) => {
            return data;
        });
}
